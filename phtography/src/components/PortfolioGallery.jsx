import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories, gallery } from '../data/portfolioData'
import GalleryFilters from './GalleryFilters'
import Lightbox from './Lightbox'
import Reveal from './Reveal'
import Img from './Img'
export default function PortfolioGallery() {
  const [filter, setFilter] = useState('all'), [open, setOpen] = useState(null)
  const items = useMemo(() => filter === 'all' ? gallery : gallery.filter(i => i.category === filter), [filter])
  const close = useCallback(() => setOpen(null), [])
  const label = k => categories.find(c => c.key === k)?.full
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <h2 className="grad-text font-serif text-5xl md:text-7xl">Selected Works</h2>
        <p className="mt-4 max-w-xl font-serif text-xl text-mute">A collection of moments, perspectives, and stories captured through my lens.</p>
      </Reveal>
      <div className="mt-10 border-b border-line"><GalleryFilters value={filter} onChange={setFilter} /></div>
      {items.length === 0 ? (
        <p className="py-24 text-center font-serif text-2xl text-mute">No photographs in this category yet.</p>
      ) : (
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          <AnimatePresence mode="popLayout">
            {items.map((it, i) => (
              <motion.figure key={it.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="group relative break-inside-avoid">
                <button onClick={() => setOpen(i)} className="block w-full overflow-hidden bg-panel text-left" aria-label={`Open ${it.title}`}>
                  <Img src={it.image} alt={it.alt} style={{ aspectRatio: it.ratio }} className="w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-100 transition duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                    <span className="block font-serif text-xl">{it.title}</span>
                    <span className="block text-xs text-white/80">{label(it.category)}</span>
                  </span>
                </button>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      )}
      {open !== null && items[open] && <Lightbox items={items} index={open} onClose={close} onChange={setOpen} />}
    </section>
  )
}
