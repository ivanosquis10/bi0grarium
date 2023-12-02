import "@/styles/globals.css"
import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { sora } from "@/config/fonts"
import { ThemeProvider } from "./providers"
import clsx from "clsx"
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
	title: {
		default: `${siteConfig.name} | ${siteConfig.author} `,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	// icons: {
	// 	icon: "/favicon.ico",
	// 	shortcut: "/favicon-16x16.png",
	// 	apple: "/apple-touch-icon.png",
	// },
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"bg-background dark:bg-zinc-900/70 font-sans antialiased",
					sora.className
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange={true}>
					<div className="relative flex flex-col min-h-screen mx-auto lg:container">
						<main className="flex-grow px-4 pt-5 mx-auto max-w-7xl">
							{children}
						</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
