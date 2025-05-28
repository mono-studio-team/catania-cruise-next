'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from '../atoms/Button'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { postVerifyOtp } from '@/api/auth'

type FormData = {
  phoneNumber?: string
  code?: string
}

export default function LoginFormCard() {
  const t = useTranslations('loginPage')
  const router = useRouter()

  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState<string>()
  const [verificationError, setVerificationError] = useState(false)
  const { setToken } = useAuth()

  const {
    handleSubmit,
    control,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>()

  const phoneValue = watch('phoneNumber')
  const otpValue = watch('code')

  const onSubmit = async (data: FormData) => {
    if (step === 'phone') {
      setPhoneNumber(data.phoneNumber)
      setStep('otp')
    } else {
      setIsOtpSubmitted(true)
      setVerificationError(false)

      console.log('FORM DATA', data)
      if (data.phoneNumber && data.code)
        try {
          const response = await postVerifyOtp(data.code, data.phoneNumber)
          console.log('RES', response)

          const token = response.data.token

          console.log('TOKEN', token)
          setToken(token)

          router.push('/')
          reset()
        } catch (err) {
          setVerificationError(true)
        }
    }
  }

  return (
    <div className="rounded-xl text-center bg-white py-8 px-5 w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm flex flex-col">
        <h1 className="text-primary-red text-[2.5rem] font-medium">{t('cardTitle')}</h1>
        <p className="text-xl mt-1">{step === 'phone' ? t('labelTel') : t('labelOtp')}</p>

        <div className="mb-10 mt-4 min-h-[140px] text-left">
          {step === 'phone' ? (
            <div>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    international
                    defaultCountry="IT"
                    countryCallingCodeEditable={false}
                    className={clsx(
                      'block w-full rounded-xl px-3 py-3 border',
                      phoneValue ? 'border-primary-grey' : 'border-gray-300',
                    )}
                  />
                )}
              />
            </div>
          ) : (
            <div>
              <input
                type="text"
                {...register('code', {
                  required: 'OTP is required',
                  minLength: { value: 6, message: 'OTP must be 6 digits' },
                })}
                placeholder="Codice"
                className={clsx(
                  'block w-full rounded-xl px-3 py-3 focus:outline-none border border-gray-300',
                  otpValue && 'border-primary-grey',
                  verificationError && 'border-primary-red',
                )}
              />
              {isOtpSubmitted && verificationError && <p className="text-primary-red text-sm mt-4">{t('errOtp')}</p>}
            </div>
          )}
        </div>

        <Button type="submit" disabled={!isValid}>
          {step === 'phone' ? t('btnTel') : t('btnOtp')}
        </Button>
      </form>
    </div>
  )
}
