'use client'

import React, { createContext, useContext, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { getVerifyToken } from '@/api/auth'
import { useLocale } from 'next-intl'

interface AuthContextType {
  setToken: (token: string) => void
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

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token)
  }

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('authToken')

      if (!token) {
        console.warn('nessun token, login')
        router.push('/login')
        return
      }

      const isValid = await getVerifyToken(token)

      if (!isValid) {
        console.warn('token non valido, redirect') //TODO - remove logs
        localStorage.removeItem('authToken')
        router.push('/redirect')
      } else {
        console.warn('token valido, home')
        console.log(pathname)
        if (pathname === `/${locale}/login` || pathname === `/${locale}/redirect`) {
          router.push('/')
        }
      }
    }

    checkToken()
  }, [])

  return <AuthContext.Provider value={{ setToken }}>{children}</AuthContext.Provider>
}
