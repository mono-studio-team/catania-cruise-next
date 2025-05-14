import localFont from 'next/font/local'

const sfPro = localFont({
  variable: '--sfpro',
  src: [
    {
      path: '../assets/fonts/SF-Pro-Text-Regular.woff2', // Regular
      style: 'normal',
      weight: '400',
    },
    {
      path: '../assets/fonts/SF-Pro-Text-Light.woff2', // Light
      style: 'normal',
      weight: '300',
    },
    {
      path: '../assets/fonts/SF-Pro-Text-Medium.woff2', // Medium
      style: 'normal',
      weight: '500',
    },
    {
      path: '../assets/fonts/SF-Pro-Text-Semibold.woff2', // Semibold
      style: 'normal',
      weight: '600',
    },
    {
      path: '../assets/fonts/SF-Pro-Text-Bold.woff2', // Bold
      style: 'normal',
      weight: '700',
    },
  ],
})

export { sfPro }
