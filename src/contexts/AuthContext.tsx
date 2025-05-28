'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { getVerifyToken } from '@/api/auth'
import { useLocale } from 'next-intl'

interface AuthContextType {
  setToken: (token: string) => void
  isAuthReady: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const [isAuthReady, setIsAuthReady] = useState(false)

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token)
  }

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('authToken')

      if (!token) {
        router.push(`/login`)
        console.log('NO TOKEN')
        setIsAuthReady(true)
        return
      }

      const isValid = await getVerifyToken(token)

      if (!isValid) {
        localStorage.removeItem('authToken')
        console.log('TOKEN IS EXPIRED')
        router.push(`/redirect`)
      } else {
        if (pathname === `/${locale}/login` || pathname === `/${locale}/redirect`) {
          console.log('TOKEN IS VALID')
          router.push(`/`)
        }
      }
      setIsAuthReady(true)
    }

    checkToken()
  }, [])

  return <AuthContext.Provider value={{ setToken, isAuthReady }}>{children}</AuthContext.Provider>
}
