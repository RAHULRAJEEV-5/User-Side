import { useEffect } from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'
import About from '../components/About';
import Footer from '../components/Footer';
import Fade from 'react-reveal/Fade'

const Home = () => {
  const [projects] = useGlobalState('projects')

  useEffect(async () => {
    await loadProjects()
  }, [])
  return (
    <>
    <Fade top distance="10%" duration={1500}>
    <Hero />
      <Projects projects={projects} />
      <About />
      <Footer />
      </Fade>
    </>
  )
}

export default Home
