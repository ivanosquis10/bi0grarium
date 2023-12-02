import Link from 'next/link'

export const MainLink = ({ title, url }: { title: string, url: string }) => {
  return (
    <Link
      href={url}
      className="relative w-full p-4 font-bold text-current transition-all duration-300 border-2 rounded-md shadow-lg dark:border-zinc-900 bg-zinc-200/70 dark:bg-zinc-900/50 hover:bg-emerald-500/30 hover:border-emerald-500 hover:dark:bg-emerald-500/40 hover:dark:border-emerald-500"
      target='_blank'
      rel='noreferrer noopener'
    >
      {title}
    </Link>
  )
}
