type ShadowBoxProps = {
  children: React.ReactNode
}

export default function ShadowBox({ children }: ShadowBoxProps) {
  return <div className="w-full py-4 px-3 shadow-strong rounded-xl font-medium text-xl">{children}</div>
}
