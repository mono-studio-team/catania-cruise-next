import Image from 'next/image'
import Background from '@/assets/login-bg.jpg'
import LoginSection from '@/components/organisms/LoginSection'

export default function Login() {
  return (
    <div className="relative h-screen w-full">
      <Image src={Background} alt="catania-cruise-background" className="absolute -z-10 h-full w-full object-cover" />
      <LoginSection />
    </div>
  )
}
