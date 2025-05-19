'use client'

import InfoIcon from '@/assets/icons/info.svg'
import FlagIT from '@/assets/icons/flag-it.svg'
import { useDrawer } from '@/contexts/DrawerContext'
import Link from 'next/link'

export default function HomeHeader() {
  const { toggleDrawer } = useDrawer()

  return (
    <header className="flex justify-between py-2 items-center">
      <h1 className="font-semibold text-2xl">Catania Cruise</h1>
      <div className="flex gap-4 items-center">
        <FlagIT onClick={toggleDrawer} width={24} height={24} />
        <Link href="/info">
          <InfoIcon />
        </Link>
      </div>
    </header>
  )
}
