type StepIndicatorProps = {
  index: number
  isLast?: boolean
}

export default function StepIndicator({ index, isLast = false }: StepIndicatorProps) {
  const isFirst = index === 0
  const isEdge = isFirst || isLast

  return (
    <div className="relative w-6 shrink-0 flex flex-col items-center mr-2">
      {/* circle */}
      <div
        className={`${
          isEdge ? 'w-4.5 h-4.5' : 'w-6 h-6'
        } flex items-center justify-center rounded-full bg-primary-red text-white font-medium`}
      >
        {!isEdge && <span className="font-light text-sm">{index + 1}</span>}
      </div>

      {/* line */}
      {!isLast && <div className="absolute top-0 w-[2px] flex-1 h-full -z-20 bg-primary-red" />}
    </div>
  )
}
