import Home from '../Components/Home'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Navbar from '../Components/Navbar'
import styles from '../styles/Index.module.scss'
import Head from 'next/head'

export default function Index() {
  return (
    <div className={styles.app}>
      <Head>
      <title>Bijay Bohora</title>
      <script src="https://kit.fontawesome.com/973ad33301.js" crossOrigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet" />
      </Head>
      <Home />
      <Navbar />
      <div className={styles.sections}>
        <Projects />
        <About />
      </div>
    </div>
  )
}