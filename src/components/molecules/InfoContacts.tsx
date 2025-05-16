import Link from 'next/link'

type InfoContactsProps = {
  title: string
  description: string
  socialLinks: {
    label: string
    href: string
  }[]
}

export default function InfoContacts({ title, description, socialLinks }: InfoContactsProps) {
  return (
    <div className="pt-6 px-5 pb-22">
      <div>
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="mt-5 text-sm">{description}</p>
      </div>
      <div className="flex flex-col gap-1.5 mt-4 font-medium">
        {socialLinks.map(({ label, href }) => (
          <Link key={label} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
