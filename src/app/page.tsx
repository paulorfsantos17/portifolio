import { Abilities } from './components/abilities'
import About from './components/about'
import Header from './components/header'
import LineSeparator from './components/line-separtor'
import Projects from './components/projects'

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <LineSeparator />
      <About />
      <Projects />
      <Abilities />
    </div>
  )
}
