'use client'

import { useDrawer } from '@/contexts/DrawerContext'
import CloseIcon from '@/assets/icons/close.svg'
import dynamic from 'next/dynamic'
import 'react-modern-drawer/dist/index.css'
import ShadowBox from '../atoms/ShadowBox'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { LANGUAGE_FLAGS, LanguageCode } from '@/config/languages'

const Drawer = dynamic(() => import('react-modern-drawer'), { ssr: false })

export default function LangDrawer() {
  const t = useTranslations('langSwitcher')
  const { isDrawerOpen, closeDrawer } = useDrawer()
  const languages = Object.values(LanguageCode)
  const router = useRouter()
  const path = usePathname()

  const handleLangChange = (locale: string) => {
    const currentLocale = path.split('/')[1]
    const newPath = path.replace(`/${currentLocale}`, '')
    router.replace(`/${locale}${newPath}`)
    closeDrawer()
  }

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
        <h3 className="text-xl font-medium">{t('title')}</h3>
        <CloseIcon className="m-1.5 cursor-pointer" onClick={closeDrawer} />
      </div>

      <div className="flex flex-col gap-2.5 py-7 px-5">
        {languages.map((code) => {
          const Icon = LANGUAGE_FLAGS[code]

          return (
            <button key={code} onClick={() => handleLangChange(code)} className="cursor-pointer">
              <ShadowBox className="w-full text-left flex items-center gap-4">
                <Icon width={40} height={40} />
                <p>{t(code)}</p>
              </ShadowBox>
            </button>
          )
        })}
      </div>
    </Drawer>
  )
}
