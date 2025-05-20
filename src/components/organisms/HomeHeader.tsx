'use client'

import InfoIcon from '@/assets/icons/info.svg'
import FlagIT from '@/assets/icons/flag-it.svg'
import { useDrawer } from '@/contexts/DrawerContext'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

type HomeHeaderProps = {
  title: string
}

export default function HomeHeader({ title }: HomeHeaderProps) {
  const { toggleDrawer } = useDrawer()
  const t = useTranslations('homePage')

  return (
    <header className="flex justify-between py-2 items-center">
      <h1 className="font-semibold text-2xl">{title}</h1>
      <div className="flex gap-4 items-center">
        <FlagIT onClick={toggleDrawer} width={24} height={24} />
        <Link href="/info">
          <InfoIcon />
        </Link>
      </div>
    </header>
  )
}
