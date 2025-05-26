import FlagIT from '@/assets/icons/flag-it.svg'
import FlagEN from '@/assets/icons/flag-en.svg'
import FlagESP from '@/assets/icons/flag-esp.svg'
import FlagDE from '@/assets/icons/flag-de.svg'

export enum LanguageCode {
  IT = 'it',
  EN = 'en',
  ESP = 'esp',
  DE = 'de',
}

export const LANGUAGE_LABELS: Record<LanguageCode, string> = {
  [LanguageCode.IT]: 'Italiano',
  [LanguageCode.EN]: 'Inglese',
  [LanguageCode.ESP]: 'Spagnolo',
  [LanguageCode.DE]: 'Tedesco',
}

export const LANGUAGE_FLAGS: Record<LanguageCode, React.FC<React.SVGProps<SVGSVGElement>>> = {
  [LanguageCode.IT]: FlagIT,
  [LanguageCode.EN]: FlagEN,
  [LanguageCode.ESP]: FlagESP,
  [LanguageCode.DE]: FlagDE,
}
