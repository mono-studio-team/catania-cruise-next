'use client'

import Info from '@/assets/icons/info.svg'
import Lang from '@/assets/icons/flag-ita.svg'
import { useDrawer } from '@/contexts/DrawerContext'

export default function HomeHeader() {
  const { toggleDrawer } = useDrawer()

  return (
    <header className="flex justify-between py-2 items-center">
      <h1 className="font-semibold text-2xl">Catania Cruise</h1>
      <div className="flex gap-4 items-center">
        <Lang onClick={toggleDrawer} />
        <Info />
      </div>
    </header>
  )
}
