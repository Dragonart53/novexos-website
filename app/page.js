import Hero3D from '@/components/Hero3D'
import Features from '@/components/Features'
import Roadmap from '@/components/Roadmap'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Hero3D />
      <Features />
      <Roadmap />
      <Download />
      <Footer />
    </main>
  )
}
