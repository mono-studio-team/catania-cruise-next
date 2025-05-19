'use client'

import Image from 'next/image'
import defaultImg from '@/assets/example2.png'
import { RoutePoint } from '@/types/api'

type RoutePointCardProps = {
  point: RoutePoint
}

export default function RoutePointCard({ point }: RoutePointCardProps) {
  //TODO - what if img is missing ?
  const img = point.image?.value ?? defaultImg

  return (
    <div className="flex flex-col gap-3.5">
      <h3 className="text-lg font-medium leading-5.5 text-primary-black">{point.name.value}</h3>
      <div className="relative rounded-lg overflow-hidden h-[128px] w-full">
        <Image src={img} alt="Route-point image" sizes="100vw" className="object-cover" fill />
      </div>
    </div>
  )
}
