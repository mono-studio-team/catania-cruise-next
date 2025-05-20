import clsx from 'clsx'
import React from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'link'
  size?: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  className,
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary: 'bg-primary-black text-white rounded-full',
    secondary: 'bg-primary-aqua text-white text-lg rounded-t-xl',
    link: 'text-black underline underline-offset-2 font-semibold decoration-2',
  }

  const sizes = {
    small: 'px-7 py-2.5',
    medium: 'px-4 py-3',
    large: 'px-4 py-4.5',
  }

  const disabledStyle = 'opacity-50 cursor-not-allowed'

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center w-full justify-center font-medium cursor-pointer',
        variants[variant],
        sizes[size],
        className,
        disabled && disabledStyle,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
