import LoginFormCard from '@/components/molecules/LoginFormCard'
import Logo from '@/assets/logo.svg'
import HomeHeader from './HomeHeader'
import { useTranslations } from 'next-intl'

export default function LoginSection() {
  const t = useTranslations('homePage')

  return (
    <section className="px-5 flex h-full flex-col max-w-md mx-auto pt-3">
      <HomeHeader title={t('headerTitle')} />
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative w-full">
          <Logo className="absolute -top-[109.5px] left-0 right-0 mx-auto" />
          <LoginFormCard />
        </div>
      </div>
    </section>
  )
}
