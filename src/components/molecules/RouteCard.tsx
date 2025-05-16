'use client'

import Image from 'next/image'
import Link from 'next/link'
import Background from '@/assets/example.png'
import Clock from '@/assets/icons/clock.svg'
import Flag from '@/assets/icons/km1.svg'
import Bicicle from '@/assets/icons/bicicle.svg'
import { Route } from '@/types/api'

type RouteCardProps = {
  route: Route
}

export default function RouteCard({ route }: RouteCardProps) {
  return (
    <Link href={`/routes/${encodeURIComponent(route.id)}`} passHref>
      <div className="rounded-xl w-full px-2 py-2 text-white bg-primary-red cursor-pointer hover:opacity-90 transition-opacity">
        <div className="rounded-lg overflow-hidden h-[134px]">
          <Image src={Background} alt="Route image" className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-between items-center pt-2 px-1">
          <div>
            <p className="inline-flex items-center gap-1 mb-1.5 font-light text-sm">
              <span>
                <Bicicle />
              </span>
              Percorso in bicicletta
            </p>
            <h3 className="font-medium text-xl max-w-64">{route.nameIT.value}</h3>
          </div>
          <div className="text-sm mt-auto flex gap-1 shrink-0">
            <div className="flex flex-col justify-center gap-3">
              <Clock />
              <Flag />
            </div>
            <div className="flex flex-col gap-2 items-end">
              <p>2,5 h</p>
              <p>18 Km</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
