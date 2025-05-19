import KmIcon from '@/assets/icons/km2.svg'
import BikeIcon from '@/assets/icons/bicicle.svg'
import FootIcon from '@/assets/icons/foot.svg'
import clsx from 'clsx'

type RouteInfoBarProps = {
  bikeDuration: string
  footDuration: string
  total: string
  className?: string
}

export default function RouteInfoBar({ bikeDuration, footDuration, total, className }: RouteInfoBarProps) {
  const items = [
    { icon: KmIcon, value: total },
    { icon: BikeIcon, value: bikeDuration },
    { icon: FootIcon, value: footDuration },
  ]

  return (
    <div
      className={clsx(
        'bg-primary-red text-white text-sm font-light w-fit rounded-xl flex items-center gap-2.5 py-1.5',
        className,
      )}
    >
      {items.map(({ icon: Icon, value }, index) => (
        <p key={index} className="flex items-center gap-1">
          <Icon />
          {value}
        </p>
      ))}
    </div>
  )
}
