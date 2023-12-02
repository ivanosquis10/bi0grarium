import { ThemeSwitch } from './theme-switch'

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-between w-full py-2'>
      <div className='container flex flex-col items-center justify-between gap-4 md:h-10 md:flex-row'>
        <p className='text-sm leading-loose text-center text-foreground md:text-left'>
          Built by <a href='https://twitter.com/ivanosquis13' target='_blank' rel='noreferrer' className='font-medium underline underline-offset-4'>Iván😻</a>.
          All rights reserved. <span>©{new Date().getFullYear()}</span>
        </p>
        <ThemeSwitch />
      </div>
    </footer>
  )
}
