import { sfPro } from '@/config/fonts'
import '../styles/globals.css'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sfPro.className}`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
