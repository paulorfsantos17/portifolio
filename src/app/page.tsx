import { Abilities } from './components/abilities'
import About from './components/about'
import CallToAction from './components/call-to-action'
import Footer from './components/footer'
import Header from './components/header'
import LineSeparator from './components/line-separtor'
import Projects from './components/projects'

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <About />
      <Projects />
      <Abilities />
      <CallToAction />
      <LineSeparator />
      <Footer />
    </div>
  )
}
