'use client'

type loaderProps = {
  src: string
  width: string
  quality: number
}

export default function imageLoader({ src, width, quality }: loaderProps) {
  return `${src}?w=${width}&q=${quality || 75}`
}
