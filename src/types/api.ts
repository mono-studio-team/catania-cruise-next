export type Route = {
  id: string
  type: string
  name: {
    type: string
    value: string
  }
  hasPoints: {
    type: string
    object: string[]
  }
}

type Relationship = {
  type: 'Relationship'
  object: string
}

type Property<T = any> = {
  type: 'Property'
  value: T
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
  isLocatedAt: Relationship
  housenumber: Property<string>
  address: Property<AddressValue>
  name: Property<string>
  audioEN: Property<string>
  audioESP: Property<string>
  audioIT: Property<string>
  descriptionEN: Property<string>
  descriptionESP: Property<string>
  descriptionIT: Property<string>
  location: GeoProperty
}
