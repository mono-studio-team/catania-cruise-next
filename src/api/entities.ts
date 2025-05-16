'use server'

import { api } from '@/lib/api'
import { Route, RoutePoint } from '@/types/api'

const path = '/entities'

export const getAllRoutes = async (): Promise<Route[]> => {
  try {
    const { data } = await api.get(path, {
      params: {
        type: 'Route',
      },
    })
    return data
  } catch (err) {
    console.log('err', err)
    throw err
  }
}

export const getEntityById = async (id: string): Promise<RoutePoint | Route> => {
  try {
    const { data } = await api.get(`${path}/${id}`)
    return data
  } catch (err) {
    console.log('err', err)
    throw err
  }
}
