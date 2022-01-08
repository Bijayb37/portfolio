import Home from '../Components/Home'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Layout from '../Components/Layout'
import Navbar from '../Components/Navbar'
import styles from '../styles/Index.module.scss'
import { Element } from 'react-scroll'

export default function Index() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Element id="containerElement" name="section" className={`${styles.sections} element`}>
        {/* <Home /> */}
        <Projects />
        <About />
      </Element>
    </div>
  )
}