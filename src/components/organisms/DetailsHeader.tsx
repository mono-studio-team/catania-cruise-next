'use client'

import Image from 'next/image'
import Background from '@/assets/example2.png'
import Map from '@/assets/map.png'
import Clock from '@/assets/icons/clock.svg'
import Km from '@/assets/icons/km2.svg'
import Bicicle from '@/assets/icons/bicicle.svg'

type DetailsHeaderProps = {
  imageUrl?: string
  title: string
  subtitle?: string
  icons?: React.ReactNode
}

export default function DetailsHeader({ imageUrl, title, subtitle, icons }: DetailsHeaderProps) {
  return (
    <div className="relative">
      <div className="rounded-b-lg overflow-hidden h-[317px]">
        <Image src={Background} alt="Route image" className="object-cover w-full h-full" />
      </div>
      <div className="px-5 pt-7 pb-22">
        <div className="flex justify-between text-white text-sm font-light">
          <div className="bg-primary-red rounded-xl py-1.5 px-2.5 flex items-center gap-2.5">
            <p className="flex items-center gap-1">
              <span>
                <Clock />
              </span>
              2,5 h
            </p>
            <p className="flex items-center gap-1">
              <span>
                <Km />
              </span>
              18 Km
            </p>
          </div>
          <div className="bg-primary-red rounded-xl flex items-center py-1.5 px-2.5">
            <Bicicle />
          </div>
        </div>
        <h1 className="text-2xl font-medium mt-4">{title}</h1>
        <p className="mt-2">
          Questo percorso inizia dal Porto di Catania, attraversa il centro storico e arriva fino alla spiaggia La
          Playa. Ideale per chi vuole combinare cultura e relax sulla spiaggia.
        </p>
        {/* MAP image */}
        <div className="rounded-lg mt-4">
          <Image src={Map} alt="Route image" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  )
}
