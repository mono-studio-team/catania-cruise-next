import LoginFormCard from '@/components/molecules/LoginFormCard'
import Logo from '@/assets/logo.svg'

export default function LoginSection() {
  return (
    <section className="px-5 flex h-full flex-col items-center justify-center max-w-md mx-auto">
      <Logo className="mb-9" />
      <LoginFormCard />
    </section>
  )
}
