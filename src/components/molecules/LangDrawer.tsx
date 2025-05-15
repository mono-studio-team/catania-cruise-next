'use client'

import { useDrawer } from '@/contexts/DrawerContext'
import dynamic from 'next/dynamic'
import 'react-modern-drawer/dist/index.css'
const Drawer = dynamic(() => import('react-modern-drawer'), { ssr: false })

export default function LangDrawer() {
  const { isDrawerOpen, closeDrawer } = useDrawer()

  return (
    <Drawer customIdSuffix="lang-switch-drawer886" open={isDrawerOpen} onClose={closeDrawer} direction="bottom">
      <div className="p-4">
        <h3 className="text-xl font-semibold">Language Switcher</h3>
        {/* TODO - Language selection here */}
      </div>
    </Drawer>
  )
}
