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
    secondary: 'bg-primary-aqua text-white text-lg rounded-t-xl px-4 py-4.5',
    link: 'text-black underline underline-offset-2 font-semibold decoration-2',
  }

  const disabledStyle = 'opacity-50 cursor-not-allowed'

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center w-full justify-center font-medium cursor-pointer', //TODO - change width
        variants[variant],
        disabled && disabledStyle,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
