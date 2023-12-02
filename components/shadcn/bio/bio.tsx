import { Card } from '@/components/ui/card'
import { user } from '@/config/user'

export const Bio = () => {
  return (
    <Card className='bg-transparent border-none shadow-none'>
      <p className='font-thin leading-relaxed tracking-wide'>{user.bio}</p>
    </Card>
  )
}
