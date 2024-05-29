import dynamic from 'next/dynamic'

import About from './components/about'
import CallToAction from './components/call-to-action'
import Header from './components/header'
import LineSeparator from './components/line-separtor'
import Projects from './components/projects'

const Abilities = dynamic(() => import('./components/abilities'))
const Footer = dynamic(() => import('./components/footer'))

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
