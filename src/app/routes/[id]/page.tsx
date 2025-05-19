import { getEntityById } from '@/api/entities'
import DetailsHeader from '@/components/organisms/DetailsHeader'
import { Route } from '@/types/api'
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
  console.log(route)
  return (
    <div>
      <DetailsHeader title={route.nameIT.value} />
    </div>
  )
}
