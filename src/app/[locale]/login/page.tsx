import Image from 'next/image'
import Background from '@/assets/login-bg.jpg'
import LoginSection from '@/components/organisms/LoginSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

export default function Login() {
  return (
    <div className="absolute top-0 bottom-0 inset-0">
      <div className="relative h-full w-full">
        <Image src={Background} alt="catania-cruise-background" className="absolute -z-10 h-full w-full object-cover" />
        <LoginSection />
      </div>
    </div>
  )
}
