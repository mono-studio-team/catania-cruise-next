import InfoHeader from '@/components/organisms/InfoHeader'
import InfoSection from '@/components/molecules/InfoSection'
import { useTranslations } from 'next-intl'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Info',
}

export default function Info() {
  const t = useTranslations('infoPage')

  return (
    <div className="max-w-md mx-auto">
      <InfoHeader />
      <InfoSection
        title={t('sectionTitle')}
        description={t('sectionContent')}
        socialLinks={[
          { label: 'Facebook', href: 'https://www.facebook.com/CataniaCruisePort' },
          { label: 'Instagram', href: 'https://www.instagram.com/cataniacruiseport' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cataniacruiseport' },
        ]}
      />
    </div>
  )
}
