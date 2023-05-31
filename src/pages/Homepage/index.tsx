import { Header } from '../../components/Header'
import { Home } from '../../components/Home'
import { About } from '../../components/About'
import { SkillsSection } from '../../components/SkillsSection'
import { Footer } from '../../components/Footer'

type Props = {}

export const Homepage = ({}: Props) => {
  return (
    <>
      <Header />
      <main>
        <Home id="home" />
        <About id="about" />
        <SkillsSection id="skills" />
      </main>

      <Footer />
    </>
  )
}
