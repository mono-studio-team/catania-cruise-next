import Image from 'next/image'
import Background from '@/assets/login-bg.jpg'
import LogoCard from '@/components/molecules/LogoCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Redirect',
}

export default function Redirect() {
  return (
    <div className="relative h-screen flex items-center justify-center px-5">
      <Image src={Background} alt="Route image" className="absolute -z-40 object-cover w-full h-full" />
      <LogoCard />
    </div>
  )
}
