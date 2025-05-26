export type Property<T = any> = {
  type: 'Property'
  value: T
}

export type Relationship<T = any> = {
  type: 'Relationship'
  object: T
}

export type Route = {
  id: string
  type: 'Route'

  nameEN: Property<string>
  nameESP: Property<string>
  nameIT: Property<string>
  nameDE: Property<string>

  descriptionEN: Property<string>
  descriptionESP: Property<string>
  descriptionIT: Property<string>
  descriptionDE: Property<string>

  image: Property<string>

  durationOnBike: Property<string>
  durationOnFoot: Property<string>

  totalDistance: Property<string>

  hasPoints: Relationship<string[]>
}

type GeoProperty = {
  type: 'GeoProperty'
  value: {
    type: 'Point'
    coordinates: [number, number] // [longitude, latitude]
  }
}

type AddressValue = {
  'addr:city': string
  'addr:postcode': string
  'addr:state': string
  'addr:street': string
}

export type RoutePoint = {
  id: string
  type: string

  isLocatedAt: Relationship<string>

  housenumber: Property<string>
  address: Property<AddressValue>
  image: Property<string>
  name: Property<string>

  audioEN: Property<string>
  audioESP: Property<string>
  audioIT: Property<string>
  audioDE: Property<string>

  descriptionEN: Property<string>
  descriptionESP: Property<string>
  descriptionIT: Property<string>
  descriptionDE: Property<string>

  location: GeoProperty
}
