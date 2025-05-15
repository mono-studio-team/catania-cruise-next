import { sfPro } from '@/config/fonts'
import '../styles/globals.css'
import { DrawerProvider } from '@/contexts/DrawerContext'
import LangDrawer from '@/components/molecules/LangDrawer'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sfPro.className}`}>
        <DrawerProvider>
          <main>{children}</main>
          <LangDrawer />
        </DrawerProvider>
      </body>
    </html>
  )
}
