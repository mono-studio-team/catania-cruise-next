import InfoHeader from '@/components/organisms/InfoHeader'
import InfoContacts from '@/components/molecules/InfoContacts'

export default function Info() {
  return (
    <div>
      <InfoHeader
        title="Titolo"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <InfoContacts
        title="Contatti"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        socialLinks={[
          { label: 'Facebook', href: 'https://www.facebook.com/your-page' },
          { label: 'Instagram', href: 'https://www.instagram.com/your-profile' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile' },
        ]}
      />
    </div>
  )
}
