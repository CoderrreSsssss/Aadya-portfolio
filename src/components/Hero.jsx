import { motion } from 'framer-motion'
import { site } from '../data/portfolioData'
import Img from './Img'
export default function Hero() {
  return (
    <section id="home" className="relative flex h-[100svh] min-h-[560px] items-end overflow-hidden text-white">
      <Img src={site.images.hero} alt="Hero photograph" eager className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="relative mx-auto w-full max-w-7xl px-5 pb-24 md:px-10 md:pb-28">
        <p className="mb-5 text-sm tracking-wide text-white/80">{site.label}</p>
        <h1 className="font-serif text-6xl font-medium leading-[0.95] sm:text-8xl lg:text-[9.5rem]">{site.headline}</h1>
        <p className="mt-6 max-w-md font-serif text-xl text-white/90 sm:text-2xl">{site.subline}</p>
        <p className="mt-2 text-sm text-white/70">{site.name}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#portfolio" className="bg-ivory px-6 py-3 text-sm text-ink transition hover:bg-white">Explore My Work</a>
          <a href="#about" className="border border-white/70 px-6 py-3 text-sm transition hover:bg-white/10">About the Photographer</a>
        </div>
      </motion.div>
      <div className="absolute bottom-6 left-1/2 hidden h-10 w-px -translate-x-1/2 overflow-hidden bg-white/30 md:block" aria-hidden="true"><motion.span className="block h-4 w-px bg-white" animate={{ y: [-16, 40] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }} /></div>
    </section>
  )
}
