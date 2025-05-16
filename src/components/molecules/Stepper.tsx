import clsx from 'clsx'
import StepIndicator from '../atoms/StepIndicator'

type StepperProps = {
  steps?: React.ReactNode[]
}

export default function Stepper({ steps = [] }: StepperProps) {
  const isLast = (index: number) => index === steps.length - 1

  return (
    <div className="flex flex-col">
      {steps.map((step, index) => (
        <div key={index} className="flex">
          <StepIndicator index={index} isLast={isLast(index)} />
          <div className={clsx({ 'pb-4': !isLast(index) }, 'grow-1')}>{step}</div>
        </div>
      ))}
    </div>
  )
}
