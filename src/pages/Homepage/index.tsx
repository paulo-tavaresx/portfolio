import { Header } from '../../components/Header'
import { Home } from '../../components/Home'
import { About } from '../../components/About'

type Props = {}

const Homepage = ({}: Props) => {
  return (
    <>
      <Header />
      <main>
        <Home id="home" />
        <About id="about" />
      </main>
    </>
  )
}

export default Homepage
