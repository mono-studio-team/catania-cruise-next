import { NextResponse } from 'next/server'
import axios from 'axios'
import { handleAxiosResponse } from '@/lib/handleApiRes'

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

export async function GET(request: Request) {
  const token = request.headers.get('authorization')

  if (!token) {
    return NextResponse.json({ error: 'Missing Authorization header' }, { status: 401 })
  }

  try {
    const response = await axios.get(`${API_ENDPOINT}/api/auth/verify`, {
      headers: { Authorization: token },
      validateStatus: () => true,
    })

    return handleAxiosResponse(response)
  } catch (error: any) {
    console.error('Token verification failed:', error?.response?.data || error.message)
    return NextResponse.json({ error: 'Token verification failed' }, { status: 500 })
  }
}
