'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from '../atoms/Button'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

type FormData = {
  phone?: string
  otp?: string
}

export default function LoginFormCard() {
  const t = useTranslations('loginPage')
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false)

  const {
    handleSubmit,
    control,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>()

  const phoneValue = watch('phone')
  const otpValue = watch('otp')

  const onSubmit = (data: FormData) => {
    if (step === 'phone') {
      console.log('Sending OTP to:', data.phone)
      setStep('otp')
      reset() // reset form before moving to OTP
    } else {
      console.log('Verifying OTP:', data.otp)
      setIsOtpSubmitted(true)
    }
  }

  return (
    <div className="rounded-xl text-center bg-white py-8 px-5 w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm flex flex-col">
        <h1 className="text-primary-red text-[2.5rem] font-medium">{t('cardTitle')}</h1>
        <p className="text-xl mt-1">{step === 'phone' ? `${t('labelTel')}` : `${t('labelOtp')}`}</p>
        <div className="mb-10 mt-4 min-h-[190px] text-left">
          {step === 'phone' ? (
            <div>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: 'Phone number is required',
                  validate: (value) => value?.startsWith('+') || 'Enter a valid phone number',
                }}
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
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
          ) : (
            <div>
              <input
                type="text"
                {...register('otp', {
                  required: 'OTP is required',
                  minLength: { value: 6, message: 'OTP must be 6 digits' },
                })}
                placeholder="Codice"
                className={clsx(
                  'block w-full rounded-xl px-3 py-3 focus:outline-none border',
                  otpValue ? 'border-primary-grey' : 'border-gray-300',
                )}
              />
              {isOtpSubmitted && errors.otp && <p className="text-red-500 text-sm mt-1">{t('errOtp')}</p>}

              <div className="text-sm mt-2">
                <p>{t('sentOtpMessage')}</p>
                <p className="inline-flex mt-5">
                  <span className="mr-1"> {t('notRetrievedMessage')} </span>
                  <span>
                    <Button variant="link"> {t('btnSendNewOtp')}</Button>
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
        <Button type="submit" disabled={!isValid}>
          {step === 'phone' ? `${t('btnTel')}` : `${t('btnOtp')}`}
        </Button>
      </form>
    </div>
  )
}
