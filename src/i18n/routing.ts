import { defineRouting } from 'next-intl/routing'

/*
  TODO: Observe behavior in different browsers and verify if it will fallback on defaultLocale
  When localeDetection is enabled, the locale will be detected from the Accept Language header.
  However, even if the Accept Language contains it, it will fall back to english.
  Observe behavior in different browsers and devices and eventually add localeDetection: false.
*/
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'it', 'esp'],

  // Used when no locale matches
  defaultLocale: 'it',
})

export type Locale = typeof routing.defaultLocale
