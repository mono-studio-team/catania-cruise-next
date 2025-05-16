import Image from 'next/image'
import Background from '@/assets/login-bg.jpg'
import Logo from '@/assets/logo.svg'

type InfoHeaderProps = {
  title: string
  description: string
}

export default function InfoHeader({ title, description }: InfoHeaderProps) {
  return (
    <header>
      <div className="relative">
        <div className="rounded-b-lg overflow-hidden h-[317px]">
          <Image src={Background} alt="Header image" className="object-cover w-full h-full" />
        </div>
        <Logo className="absolute -bottom-3.5 m-auto left-0 right-0" />
      </div>
      <div className="px-5 pt-10">
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="mt-5 text-sm">{description}</p>
      </div>
    </header>
  )
}
