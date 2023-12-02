import { Bio } from './bio/bio'
import { Heading } from './heading/heading'
import { MainLinks } from './main-links/main-links'

export const ShadcnTemplate = () => {
  return (
    <section className="flex flex-col items-center justify-center max-w-xl gap-5 pb-4">
      <Heading />
      <Bio />
      <MainLinks />
    </section>
  )
}
