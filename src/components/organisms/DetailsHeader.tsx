'use client'

import Image from 'next/image'
import Map from '@/assets/map.png'
import { Route } from '@/types/api'
import { getLocalizedProperty } from '@/lib/getLocalizedProperty'
import { useLocale } from 'next-intl'
import RouteInfoBar from '../atoms/RouteInfoBar'
import ImageWrapper from '../molecules/ImageWrapper'

type DetailsHeaderProps = {
  route: Route
}

export default function DetailsHeader({ route }: DetailsHeaderProps) {
  const locale = useLocale()

  return (
    <div className="relative">
      <ImageWrapper src={route.image?.value} alt="point image" className="rounded-b-xl h-[317px] w-full" />

      <div className="px-5 pt-7">
        <RouteInfoBar
          bikeDuration={route.durationOnBike.value}
          footDuration={route.durationOnFoot.value}
          total={route.totalDistance.value}
          className="px-2.5"
        />
        <h1 className="text-2xl font-medium mt-4">{getLocalizedProperty(route, 'name', locale)}</h1>
        <p className="mt-2">{getLocalizedProperty(route, 'description', locale)}</p>
        {/* MAP image */}
        <div className="rounded-lg mt-4">
          <Image src={Map} alt="Route image" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  )
}
