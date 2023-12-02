import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { user } from '@/config/user'

export const AvatarUser = () => {
  return (
    <Avatar className='w-32 h-32 rounded-lg ring ring-emerald-500 md:w-28 md:h-28'>
      <AvatarImage className='w-full h-full rounded-lg' src={user.avatar} />
      <AvatarFallback className='grid w-full h-full grid-cols-3 gap-1 p-1 rounded-lg'>
        <Skeleton className='w-8 h-8 p-2' />
        <Skeleton className='w-8 h-8 p-2' />
        <Skeleton className='w-8 h-8 p-2' />
        <Skeleton className='w-8 h-8 p-2' />
        <Skeleton className='w-8 h-8 p-2' />
        <Skeleton className='w-8 h-8 p-2' />
        <Skeleton className='w-8 h-8 p-2' />
        <Skeleton className='w-8 h-8 p-2' />
        <Skeleton className='w-8 h-8 p-2' />
      </AvatarFallback>
    </Avatar>
  )
}
