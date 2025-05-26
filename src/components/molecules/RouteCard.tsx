'use client'

import Link from 'next/link'
import { Route } from '@/types/api'
import RouteInfoBar from '../atoms/RouteInfoBar'
import { getLocalizedProperty } from '@/lib/getLocalizedProperty'
import { useLocale } from 'next-intl'
import ImageWrapper from './ImageWrapper'

type RouteCardProps = {
  route: Route
}

export default function RouteCard({ route }: RouteCardProps) {
  const locale = useLocale()

  return (
    <Link href={`/routes/${encodeURIComponent(route.id)}`} passHref>
      <div className="rounded-xl w-full px-2 py-2 text-white bg-primary-red cursor-pointer hover:opacity-90 transition-opacity shadow-soft">
        <ImageWrapper src={route.image?.value} alt="route image" className="rounded-lg h-[134px] w-full" />
        <div className="flex flex-col gap-1 pt-2 px-1">
          <RouteInfoBar
            bikeDuration={route.durationOnBike.value}
            footDuration={route.durationOnFoot.value}
            total={route.totalDistance.value}
          />
          <h3 className="font-medium text-xl max-w-60">{getLocalizedProperty(route, 'name', locale)}</h3>
        </div>
      </div>
    </Link>
  )
}
