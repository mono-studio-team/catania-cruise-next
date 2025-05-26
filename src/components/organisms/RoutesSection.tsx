'use client'

import { Route } from '@/types/api'
import RouteCard from '../molecules/RouteCard'

type RoutesSectionProps = {
  title: string
  routes: Route[]
}

export default function RoutesSection({ title, routes }: RoutesSectionProps) {
  return (
    <section className="mt-10">
      <h2 className="font-medium text-xl mb-5">{title}</h2>
      <div className="flex flex-col gap-4">
        {routes.map((route) => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </section>
  )
}
