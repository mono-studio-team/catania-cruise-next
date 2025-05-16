import Image from 'next/image'
import Background from '@/assets/example2.png'

type RoutePointCardProps = {
  title: string
  index: number
  isLast?: boolean
}

export default function RoutePointCard({ title, index, isLast }: RoutePointCardProps) {
  return (
    <div className="flex flex-col gap-3.5">
      <h3 className="text-lg font-medium leading-5.5 text-primary-black">{title}</h3>
      <div className="rounded-lg overflow-hidden h-[128px] w-full">
        <Image src={Background} alt="Route image" className="object-cover w-full h-full" />
      </div>
      {/* Other content */}
    </div>
  )
}
