'use client'

import Image, { StaticImageData } from 'next/image'
import defaultImg from '@/assets/example2.png'
import clsx from 'clsx'
import { useState } from 'react'

type ImageWrapperProps = {
  src?: string | StaticImageData
  alt?: string
  fallback?: StaticImageData
  showGradient?: boolean
  className?: string
}

export default function ImageWrapper({
  src,
  alt = 'Image',
  fallback = defaultImg,
  showGradient = true,
  className,
  ...props
}: ImageWrapperProps) {
  const [loaded, setLoaded] = useState(false)
  const imageSrc = src ?? fallback

  return (
    <div className={clsx('relative overflow-hidden', className)}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes="auto"
        onLoad={() => setLoaded(true)}
        className={clsx('object-cover', !loaded && 'bg-gray-200')}
        {...props}
      />
      {showGradient && loaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent z-10" />
      )}
    </div>
  )
}
