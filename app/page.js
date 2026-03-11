import Hero from '@/components/HeroResponsive'
import Features from '@/components/Features'
import Roadmap from '@/components/Roadmap'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Features />
      <Roadmap />
      <Download />
      <Footer />
    </main>
  )
}
