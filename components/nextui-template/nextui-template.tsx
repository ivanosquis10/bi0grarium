import React from 'react'
import { Card, CardFooter, Image, Button, CardHeader, Link, Avatar, CardBody, Badge } from "@nextui-org/react"
import { TwitterIcon, GithubIcon, LinkedinIcon, MailIcon } from '@/components/icons'

const userInformation = {
  name: 'Iván Rodríguez',
  avatar: 'https://avatars.githubusercontent.com/u/64177843?v=4',
  bio: 'Front-End Developer',
  description: 'A passionate Software Engineer who loves films and building apps. I use my social platforms to document my journey.'

}

const socialMediaLinks = [
  {
    title: 'Twitter',
    link: 'https://twitter.com/ivanosquis13',
    icon: <TwitterIcon className='text-black w-9 h-9 dark:text-zinc-100' />,
  },
  {
    title: 'Github',
    link: 'https://github.com/ivanosquis10',
    icon: <GithubIcon className='text-black w-9 h-9 dark:text-zinc-100' />,
  },
  {
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/iv%C3%A1n-rodr%C3%ADguez-web/',
    icon: <LinkedinIcon className='text-black w-9 h-9 dark:text-zinc-100' />,
  },
  {
    title: 'Email',
    link: 'mailto:ivanosquis10.12@gmail.com',
    icon: <MailIcon className='text-black w-9 h-9 dark:text-zinc-100' />,
  }
]

const MainLinks = () => {
  return (
    <Card
      isBlurred
      isFooterBlurred
      isPressable
      radius="md"
      shadow='lg'
      className="relative w-full p-2 border-none cursor-default"
    >
      <div
        className="absolute -inset-2 rounded-lg bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-emerald-500 via-green-500 to-emerald-600 opacity-50 dark:blur-2xl"
      />
      <CardFooter className="justify-center py-2 rounded-md dark:bg-zinc-900/10 bg-zinc-950/50">
        <Link href='jajajajaja' isExternal className="text-white" size="md">
          My website!
        </Link>
      </CardFooter>
    </Card>
  )
}

const MainLinksV2 = () => {
  return (
    <Card
      isBlurred
      isPressable
      radius="md"
      shadow='lg'
      className="relative w-full p-2 transition-all border-2 dark:border-zinc-900 bg-zinc-200/70 dark:bg-zinc-900/50 hover:bg-success-500/30 hover:border-success-500 hover:dark:bg-success-500/20 hover:dark:border-success-500"
    >
      <CardBody>
        <Link href='jajajajaja' isExternal className="font-bold text-current" size="md">
          My website!
        </Link>
      </CardBody>
    </Card>
  )
}

export const NextuiTemplate = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 py-4">
      <Card shadow='lg' isFooterBlurred className='border-none bg-transparent max-w-[500px]'>
        <CardHeader className='flex-col space-x-5 space-y-2 border lg:flex-row dark:border-zinc-900 dark:bg-zinc-900/50 bg-zinc-200/70'>
          <div className='w-24 h-24 rounded-xl'>
            <Avatar
              className='w-full h-full'
              isBordered
              radius="lg"
              src="https://avatars.githubusercontent.com/u/83567373?v=4"
              alt='Ivan Rodriguez avatar'
              color='success'
            />
          </div>
          <div className='flex flex-col flex-1 text-center lg:text-start'>
            <h2 className='text-2xl font-extrabold sm:text-4xl'>Ivan Rodríguez</h2>
            <p className='text-lg font-medium sm:text-xl text-success-600 dark:text-success-500'>Front-End Developer</p>
          </div>
        </CardHeader>
        {/* <CardFooter className='border dark:border-zinc-900 dark:bg-zinc-900/50 '> */}
        <CardFooter className='text-sm tracking-wider border sm:text-base dark:border-zinc-900 dark:bg-zinc-900/50 bg-zinc-200/70'>
          <p>A passionate Software Engineer who loves films and building apps. I use my social platforms to document my journey.</p>
        </CardFooter>
      </Card>

      {/* <Card className='flex items-center w-full gap-4 py-1 border justify-evenly rounded-xl dark:border-zinc-900 dark:bg-zinc-900/50 bg-zinc-200/70'> */}
      <div className='flex flex-row items-center justify-center w-full gap-5 py-2 rounded-xl'>
        {/* <div className='flex flex-row items-center justify-center w-full gap-5'> */}
        {
          socialMediaLinks.map(({ title, link, icon }) => (
            <Link
              key={title}
              isExternal
              href={link}
              target='_blank'
              rel='noreferrer'
              className='transition-all rounded-md ring-2 ring-transparent hover:ring-success-500'
            >
              {icon}
            </Link>
          ))
        }
        {/* </div> */}
      </div>

      <div className='flex flex-col w-full gap-5 mt-2'>
        {/* <div className='grid w-full gap-5 mt-2 lg:grid-cols-2'> */}
        <MainLinksV2 />
        <MainLinksV2 />
        <MainLinksV2 />
      </div>
    </section>
  )
}