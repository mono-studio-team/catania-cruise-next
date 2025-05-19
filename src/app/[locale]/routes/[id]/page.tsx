import { getEntityById } from '@/api/entities'
import Button from '@/components/atoms/Button'
import DetailsHeader from '@/components/organisms/DetailsHeader'
import RoutePointsSection from '@/components/organisms/RoutePointsSection'
import { Route, RoutePoint } from '@/types/api'
import { notFound } from 'next/navigation'

type RouteDetailsProps = {
  params: Promise<{ id: string }>
}

export default async function RouteDetailsPage({ params }: RouteDetailsProps) {
  const { id } = await params
  const data = await getEntityById(decodeURIComponent(id))

  if (!data || data.type !== 'Route') {
    notFound()
  }

  const route = data as Route

  const fetchedPoints = await Promise.all(route.hasPoints.object.map((pointId) => getEntityById(pointId)))
  // filter only route-points
  const routePoints = fetchedPoints.filter(
    (point): point is RoutePoint => point?.type !== undefined && point.type !== 'Route',
  )

  return (
    <div className="max-w-md mx-auto">
      <DetailsHeader route={route} />
      <RoutePointsSection points={routePoints} />
      <div className="fixed bottom-0 w-full">
        <Button variant="secondary">Avvia percorso</Button>
      </div>
    </div>
  )
}
