import FlagIT from '@/assets/icons/flag-it.svg'
import FlagEN from '@/assets/icons/flag-en.svg'
import FlagESP from '@/assets/icons/flag-es.svg'

export enum LanguageCode {
  IT = 'it',
  EN = 'en',
  ESP = 'esp',
}

export const LANGUAGE_LABELS: Record<LanguageCode, string> = {
  [LanguageCode.IT]: 'Italiano',
  [LanguageCode.EN]: 'Inglese',
  [LanguageCode.ESP]: 'Spagnolo',
}

export const LANGUAGE_FLAGS: Record<LanguageCode, React.FC<React.SVGProps<SVGSVGElement>>> = {
  [LanguageCode.IT]: FlagIT,
  [LanguageCode.EN]: FlagEN,
  [LanguageCode.ESP]: FlagESP,
}
