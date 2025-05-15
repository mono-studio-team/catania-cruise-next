'use client'

import { useState } from 'react'
import { Route } from '@/types/api'
import RouteCard from '../molecules/RouteCard'
import Button from '../atoms/Button'
import LangDrawer from '../molecules/LangDrawer'

type RoutesSectionProps = {
  title: string
  routes: Route[]
}

export default function RoutesSection({ title, routes }: RoutesSectionProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev)
  }

  return (
    <div className="mt-10">
      <h2 className="font-medium text-xl mb-5">{title}</h2>
      <div className="flex flex-col gap-4">
        {routes.map((route) => (
          <RouteCard key={route.id} /> //route={route}
        ))}
      </div>
      <Button onClick={toggleDrawer}>click</Button>
      {/* Drawer to switch languages */}
      <LangDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  )
}
