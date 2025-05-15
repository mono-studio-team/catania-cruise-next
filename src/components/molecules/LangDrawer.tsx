'use client'

import { useDrawer } from '@/contexts/DrawerContext'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

export default function LangDrawer() {
  const { isDrawerOpen, closeDrawer } = useDrawer()

  return (
    <Drawer customIdSuffix="lang-switch-drawer" open={isDrawerOpen} onClose={closeDrawer} direction="bottom">
      <div className="p-4">
        <h3 className="text-xl font-semibold">Language Switcher</h3>
        {/* TODO - Language selection here */}
      </div>
    </Drawer>
  )
}
