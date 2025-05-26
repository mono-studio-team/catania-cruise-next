import { RoutePoint } from '@/types/api'
import Stepper from '../molecules/Stepper'
import RoutePointCard from '../molecules/RoutePointCard'

type RoutePointsSectionProps = {
  points: RoutePoint[]
}

export default function RoutePointsSection({ points = [] }: RoutePointsSectionProps) {
  const steps = points.map((point) => <RoutePointCard key={point.id} point={point} />)

  return (
    <section className="mt-10 px-5 pb-22">
      <Stepper steps={steps} />
    </section>
  )
}
