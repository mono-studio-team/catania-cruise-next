'use client'

import InfoIcon from '@/assets/icons/info.svg'
import { useDrawer } from '@/contexts/DrawerContext'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { LANGUAGE_FLAGS, LanguageCode } from '@/config/languages'

type HomeHeaderProps = {
  title: string
}

export default function HomeHeader({ title }: HomeHeaderProps) {
  const { toggleDrawer } = useDrawer()
  const t = useTranslations('homePage')
  const locale = useLocale() as LanguageCode
  const FlagIcon = LANGUAGE_FLAGS[locale]

  return (
    <header className="flex justify-between py-2 items-center">
      <h1 className="font-semibold text-2xl">{title}</h1>
      <div className="flex gap-4 items-center">
        <div className="w-[26px] h-[26px] flex items-center">
          <FlagIcon width={26} height={17.5} onClick={toggleDrawer} className="cursor-pointer border border-black" />
        </div>
        <Link href="/info">
          <InfoIcon />
        </Link>
      </div>
    </header>
  )
}
