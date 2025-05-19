import localFont from 'next/font/local'

const sfPro = localFont({
  variable: '--sfpro',
  src: [
    {
      path: '../assets/fonts/sf-pro-text-regular.woff2', // Regular
      style: 'normal',
      weight: '400',
    },
    {
      path: '../assets/fonts/sf-pro-text-light.woff2', // Light
      style: 'normal',
      weight: '300',
    },
    {
      path: '../assets/fonts/sf-pro-text-medium.woff2', // Medium
      style: 'normal',
      weight: '500',
    },
    {
      path: '../assets/fonts/sf-pro-text-semibold.woff2', // Semibold
      style: 'normal',
      weight: '600',
    },
    {
      path: '../assets/fonts/sf-pro-text-bold.woff2', // Bold
      style: 'normal',
      weight: '700',
    },
  ],
})

export { sfPro }
