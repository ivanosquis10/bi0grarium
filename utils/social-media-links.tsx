import { DiscordIcon, GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from '@/components/icons'
import { user } from '@/config/user'

export const socialMediaLinks = [
  {
    title: 'Twitter',
    link: user.links.twitter,
    icon: <TwitterIcon className='w-8 h-8 text-black dark:text-zinc-100' />
  },
  {
    title: 'Github',
    link: user.links.github,
    icon: <GithubIcon className='w-8 h-8 text-black dark:text-zinc-100' />
  },
  {
    title: 'Linkedin',
    link: user.links.linkedin,
    icon: <LinkedinIcon className='w-8 h-8 text-black dark:text-zinc-100' />
  },
  {
    title: 'Discord',
    link: user.links.discord,
    icon: <DiscordIcon className='w-8 h-8 text-black dark:text-zinc-100' />
  },
  {
    title: 'Email',
    link: user.links.email,
    icon: <MailIcon className='w-8 h-8 text-black dark:text-zinc-100' />
  }
]
