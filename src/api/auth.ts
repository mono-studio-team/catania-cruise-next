import axios from 'axios'

export const postVerifyOtp = async (code: string, phoneNumber: string) => {
  try {
    const response = await axios.post('/api/auth/verify-otp', {
      code,
      phoneNumber,
    })

    return response.data
  } catch (error: any) {
    throw new Error('OTP verification failed' + error?.response?.data || error.message)
  }
}

export const getVerifyToken = async (token: string): Promise<boolean> => {
  try {
    const response = await axios.get('/api/auth/verify-token', {
      headers: {
        Authorization: token,
      },
    })

    if (response.status === 200) return true
    if (response.status === 401) return false

    throw new Error(`Error: ${response.data.message}`)
  } catch (error: any) {
    throw new Error('Error verifying token: ' + error?.response?.data || error.message)
  }
}
