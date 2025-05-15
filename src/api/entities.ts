'use server'

import { api } from '@/lib/api'

const path = '/entities'

export const getAllRoutes = async (): Promise<[]> => {
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

export const getEntityById = async (id: string): Promise<[]> => {
  try {
    const { data } = await api.get(`${path}/${id}`)
    return data
  } catch (err) {
    console.log('err', err)
    throw err
  }
}
