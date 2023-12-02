import { socialMediaLinks } from '@/utils/social-media-links'
import Link from 'next/link'

export const SocialLinks = () => {
  return (
    <div className='flex items-center justify-center gap-5 md:justify-start'>
      {socialMediaLinks.map(({ title, link, icon }) => (
        <Link
          key={title}
          href={link}
          target='_blank'
          rel='noreferrer'
          className='px-1 transition-all duration-300 rounded-md ring-2 ring-transparent hover:ring-emerald-500'
        >
          {icon}
        </Link>
      ))
      }
    </div>
  )
}
