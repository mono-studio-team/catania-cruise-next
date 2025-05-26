import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axios from 'axios'
import { handleAxiosResponse } from '@/lib/handleApiRes'

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

export async function POST(req: NextRequest) {
  try {
    const { code, phoneNumber } = await req.json()

    const response = await axios.post(
      `${API_ENDPOINT}/api/verify`,
      {
        code,
        phoneNumber,
      },
      {
        validateStatus: () => true,
      },
    )

    return handleAxiosResponse(response)
  } catch (error: any) {
    console.error('OTP verification failed:', error?.response?.data || error.message)
    return NextResponse.json({ error: 'OTP verification failed' }, { status: 500 })
  }
}
