import { getEntityById } from '@/api/entities'
import DetailsHeader from '@/components/organisms/DetailsHeader'
import RoutePointsSection from '@/components/organisms/RoutePointsSection'
import { Route, RoutePoint } from '@/types/api'
import { notFound } from 'next/navigation'

type RouteDetailsProps = {
  params: { id: string }
}

export default async function RouteDetailsPage({ params }: RouteDetailsProps) {
  const { id } = await params
  const data = await getEntityById(id)

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
    <div>
      <DetailsHeader title={route.nameIT.value} />
      <RoutePointsSection points={routePoints} />
    </div>
  )
}
