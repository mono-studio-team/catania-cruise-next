'use client'

import { RoutePoint } from '@/types/api'
import ImageWrapper from './ImageWrapper'

type RoutePointCardProps = {
  point: RoutePoint
}

export default function RoutePointCard({ point }: RoutePointCardProps) {
  return (
    <div className="flex flex-col gap-3.5">
      <h3 className="text-lg font-medium leading-5.5 text-primary-black">{point.name.value}</h3>
      <ImageWrapper src={point.image?.value} alt="point image" className="rounded-lg h-[128px] w-full" />
    </div>
  )
}
