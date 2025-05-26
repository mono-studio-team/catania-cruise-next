import clsx from 'clsx'

type ShadowBoxProps = {
  children: React.ReactNode
  className: string
}

export default function ShadowBox({ children, className }: ShadowBoxProps) {
  return (
    <div className={clsx('w-full py-4 px-3 shadow-strong rounded-xl font-medium text-xl', className)}>{children}</div>
  )
}
