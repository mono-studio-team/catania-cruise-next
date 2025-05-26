import '@/styles/globals.css'
import { sfPro } from '@/config/fonts'
import { DrawerProvider } from '@/contexts/DrawerContext'
import LangDrawer from '@/components/molecules/LangDrawer'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { AuthProvider } from '@/contexts/AuthContext'

type RootLayoutProps = {
  children: ReactNode
  params: {
    locale: Promise<typeof routing.defaultLocale>
  }
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  const messages = JSON.parse(await readFile(join(process.cwd(), 'src/messages', `${locale}.json`), 'utf8'))

  return (
    <html lang="en">
      <body className={`${sfPro.className}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <DrawerProvider>
            <main>{children}</main>
            <LangDrawer />
          </DrawerProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
