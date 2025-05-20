'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Route } from '@/types/api'
import RouteInfoBar from '../atoms/RouteInfoBar'

type RouteCardProps = {
  route: Route
}

export default function RouteCard({ route }: RouteCardProps) {
  return (
    <Link href={`/routes/${encodeURIComponent(route.id)}`} passHref>
      <div className="rounded-xl w-full px-2 py-2 text-white bg-primary-red cursor-pointer hover:opacity-90 transition-opacity shadow-soft">
        <div className="relative rounded-lg overflow-hidden h-[134px]">
          <Image src={route.image.value} alt="Route image" sizes="100vw" className="object-cover" fill />
        </div>
        <div className="flex flex-col gap-1 pt-2 px-1">
          <RouteInfoBar
            bikeDuration={route.durationOnBike.value}
            footDuration={route.durationOnFoot.value}
            total={route.totalDistance.value}
          />
          <h3 className="font-medium text-xl max-w-60">{route.nameIT.value}</h3>
        </div>
      </div>
    </Link>
  )
}
