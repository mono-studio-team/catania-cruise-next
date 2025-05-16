import Image from 'next/image'
import Logo from '@/assets/logo.svg'

type LogoCardProps = {}

export default function LogoCard({}: LogoCardProps) {
  return (
    <div className="relative flex flex-col gap-2.5 bg-white rounded-lg px-4 py-8 text-center">
      <Logo className="absolute -top-27.5 m-auto left-0 right-0" />

      <h1 className="text-[26px] font-medium text-primary-red">Il tuo accesso è scaduto!</h1>
      <p className="text-sm">Ti ringraziamo per aver utilizzato Catania Cruise</p>
      {/* Other content */}
    </div>
  )
}
