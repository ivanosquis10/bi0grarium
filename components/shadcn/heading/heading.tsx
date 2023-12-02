import { Card, CardHeader } from '@/components/ui/card'
import { AvatarUser } from '../avatar-user/avatar-user'
import { user } from '@/config/user'
import { SocialLinks } from '../social-links/social-links'

export const Heading = () => {
  return (
    <Card className='w-full bg-transparent border-none shadow-none'>
      <CardHeader className='flex-col items-center p-0 px-1 py-3 space-y-2 sm:gap-5 sm:flex-row'>
        <AvatarUser />
        <div className='flex flex-col flex-1 gap-2 text-center md:text-start'>
          <div>
            <h2 className='text-3xl font-extrabold tracking-wide sm:text-4xl'>{user.name}</h2>
            <p className='text-xl font-medium tracking-tight sm:text-xl text-emerald-500 dark:text-emerald-500'>{user.role}</p>
          </div>
          <SocialLinks />
        </div>
      </CardHeader>
    </Card>
  )
}
