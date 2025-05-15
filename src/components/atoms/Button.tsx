import clsx from 'clsx'
import React from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'link'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary: 'bg-primary-black text-white rounded-full px-4 py-3',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 px-4 py-2',
    link: 'text-black underline underline-offset-2 font-semibold decoration-2',
  }

  const disabledStyle = 'opacity-50 cursor-not-allowed'

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center w-full justify-center font-medium cursor-pointer',
        variants[variant],
        disabled && disabledStyle,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
