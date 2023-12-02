import { MainLink } from '../main-link/main-link'

const links = [
  {
    id: 1,
    title: 'My portfolio',
    url: 'https://portfolio-ivanosquis-iv.vercel.app/'
  },
  {
    id: 2,
    title: 'Bolivarium app',
    url: 'https://bolivarium-conversor.vercel.app/'
  }
]

export const MainLinks = () => {
  return (
    <div className='w-full'>
      <h3 className='mb-5 text-2xl font-bold'>My websites</h3>
      <ul className='flex flex-col w-full gap-5'>
        {links.map(({ title, url }) => (
          <MainLink key={title} title={title} url={url} />
        ))}
      </ul>
    </div>
  )
}
