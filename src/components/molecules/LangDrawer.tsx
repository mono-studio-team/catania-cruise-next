'use client'

import { useDrawer } from '@/contexts/DrawerContext'
import CloseIcon from '@/assets/icons/close.svg'
import dynamic from 'next/dynamic'
import 'react-modern-drawer/dist/index.css'
import ShadowBox from '../atoms/ShadowBox'
import Link from 'next/link'
import { LANGUAGE_FLAGS, LANGUAGE_LABELS, LanguageCode } from '@/config/languages'

const Drawer = dynamic(() => import('react-modern-drawer'), { ssr: false })

export default function LangDrawer() {
  const { isDrawerOpen, closeDrawer } = useDrawer()
  const languages = Object.values(LanguageCode)

  return (
    <Drawer
      customIdSuffix="lang-switch-drawer"
      open={isDrawerOpen}
      onClose={closeDrawer}
      direction="bottom"
      size="auto"
      className="rounded-t-xl overflow-hidden"
    >
      <div className="bg-primary-red flex justify-between items-center py-4.5 px-5 text-white text-xl font-medium">
        <h3 className="text-xl font-medium">Seleziona la lingua</h3>
        <CloseIcon className="m-1.5" onClick={closeDrawer} />
      </div>

      <div className="flex flex-col gap-2.5 py-7 px-5">
        {languages.map((code) => {
          const Icon = LANGUAGE_FLAGS[code]
          const label = LANGUAGE_LABELS[code]

          return (
            <ShadowBox key={code}>
              <Link href={`/${code}`} locale={code} onClick={closeDrawer} className="block">
                <div className="flex items-center gap-4">
                  <Icon width={40} height={40} />
                  <p>{label}</p>
                </div>
              </Link>
            </ShadowBox>
          )
        })}
      </div>
    </Drawer>
  )
}
