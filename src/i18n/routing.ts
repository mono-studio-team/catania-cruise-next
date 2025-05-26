import { defineRouting } from 'next-intl/routing'

/*
  When localeDetection is enabled, the locale will be detected from the Accept Language header.
*/
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['it', 'en', 'esp', 'de'],

  // Used when no locale matches
  defaultLocale: 'en',
})

export type Locale = typeof routing.defaultLocale
