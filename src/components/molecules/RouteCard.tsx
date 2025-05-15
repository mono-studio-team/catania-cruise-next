import Image from 'next/image'
import Background from '@/assets/example.png'
import Clock from '@/assets/icons/clock.svg'
import Flag from '@/assets/icons/km1.svg'
import Bicicle from '@/assets/icons/bicicle.svg'

export default function RouteCard() {
  return (
    <div className="rounded-xl w-full px-2 py-2 text-white bg-primary-red">
      <div className="rounded-lg overflow-hidden h-[134px]">
        <Image src={Background} alt="Picture of the author" className="object-cover w-full h-full" />
      </div>
      <div className="flex justify-between items-center pt-2">
        <div>
          <p className="inline-flex items-center gap-1 mb-1.5 font-light text-sm">
            <span>
              <Bicicle />
            </span>
            Percorso in bicicletta
          </p>
          <h3 className="font-medium text-xl">Nel cuore di Catania</h3>
        </div>
        <div className="text-sm flex gap-1">
          <div className="flex flex-col justify-center gap-2">
            <Clock />
            <Flag />
          </div>
          <div className="flex flex-col gap-1 items-end">
            <p>2,5 h</p>
            <p>18 Km</p>
          </div>
        </div>
      </div>
    </div>
  )
}
