import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/images/bg.png')] bg-cover bg-no-repeat">
      <Navbar />
      <Hero />
    </div>
  )
}
