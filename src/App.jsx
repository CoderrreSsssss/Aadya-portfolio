import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PortfolioGallery from './components/PortfolioGallery'
import About from './components/About'
import Interests from './components/Interests'
import CreativeProcess from './components/CreativeProcess'
import FeaturedFrame from './components/FeaturedFrame'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero /><PortfolioGallery /><About /><Interests /><CreativeProcess /><FeaturedFrame /><Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
