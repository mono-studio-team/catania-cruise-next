'use client'

import { getAllRoutes } from '@/api/entities'
import HomeHeader from '@/components/organisms/HomeHeader'
import RoutesSection from '@/components/organisms/RoutesSection'
import { Route } from '@/types/api'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export default function Home() {
  const t = useTranslations('homePage')
  const [routes, setRoutes] = useState<Route[]>([])

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const data = await getAllRoutes()
        setRoutes(data)
      } catch (err) {
        console.error('Error fetching routes:', err)
      }
    }

    fetchRoutes()
  }, [])

  return (
    <div className="px-5 pt-3 pb-22 max-w-md mx-auto">
      <HomeHeader title={t('headerTitle')} />
      <RoutesSection title={t('sectionTitle')} routes={routes} />
    </div>
  )
}
