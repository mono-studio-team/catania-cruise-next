import { NextResponse } from 'next/server'
import type { AxiosResponse } from 'axios'

export function handleAxiosResponse<T = any>(response: AxiosResponse<T>) {
  const { status, data } = response

  switch (status) {
    case 200:
      return NextResponse.json({ message: 'Success', data }, { status })
    case 401:
      return NextResponse.json({ message: 'Unauthorized or expired token' }, { status })
    case 404:
      return NextResponse.json({ message: 'Resource not found' }, { status })
    case 500:
      return NextResponse.json({ error: 'Internal server error' }, { status })
    default:
      return NextResponse.json({ error: 'Unexpected response', data }, { status })
  }
}
