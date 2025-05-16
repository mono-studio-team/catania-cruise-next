'use client'

import { getAllRoutes } from '@/api/entities'
import HomeHeader from '@/components/organisms/HomeHeader'
import RoutesSection from '@/components/organisms/RoutesSection'
import { Route } from '@/types/api'
import { useEffect, useState } from 'react'

export default function Home() {
  const [routes, setRoutes] = useState<Route[]>([])

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const data = await getAllRoutes()
        console.log('Fetched routes:', data)
        setRoutes(data)
      } catch (err) {
        console.error('Error fetching routes:', err)
      }
    }

    fetchRoutes()
  }, [])

  return (
    <div className="px-5 pt-15 pb-22">
      <HomeHeader />
      <RoutesSection title="Tutti i percorsi" routes={routes} />
    </div>
  )
}
