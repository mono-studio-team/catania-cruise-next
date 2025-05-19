import LoginFormCard from '@/components/molecules/LoginFormCard'
import Logo from '@/assets/logo.svg'

export default function LoginSection() {
  return (
    <section className="px-5 flex h-full flex-col items-center justify-end max-w-md mx-auto">
      <div className="relative mb-19 w-full">
        <Logo className="absolute -top-[110px] left-0 right-0 mx-auto" />
        <LoginFormCard />
      </div>
    </section>
  )
}
