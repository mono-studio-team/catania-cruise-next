import Background from '@/assets/info-bg.png'
import Logo from '@/assets/logo.svg'
import ImageWrapper from '../molecules/ImageWrapper'

export default function InfoHeader() {
  return (
    <header>
      <div className="relative">
        <ImageWrapper src={Background} alt="point image" className="rounded-b-xl h-[317px] w-full" />
        <Logo className="absolute -bottom-3.5 z-30 m-auto left-0 right-0" />
      </div>
    </header>
  )
}
