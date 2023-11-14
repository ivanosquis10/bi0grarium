import { Link } from '@nextui-org/react'
import { ThemeSwitch } from './theme-switch'

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full py-3">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
        title="nextui.org homepage"
      >
        <span className="text-default-600">Built by</span>
        <p className="text-success">Ivanosquis</p>
      </Link>
      <ThemeSwitch />
    </footer>
  )
}