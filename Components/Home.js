import { Element } from 'react-scroll'
import styles from '../styles/Home.module.scss'
import { Link } from 'react-scroll'

export default function Home() {
  return (
    <Element name="home" className={styles.main}>
      <div className={styles.intro}>
        <div className={styles.myName}>
          Hi, I'm <span style={{color: "#ce7882"}}>Bijay Bohora</span>
          <br />
          I'm a Full-Stack Web Developer
        </div>
        
        <p></p>
        <div className={styles.buttons}>
          <Link to="about" className={styles.button} smooth={true} offset={-50}>Learn More About Me</Link>
          <Link to="projects" className={styles.button} smooth={true} offset={-50}>View My Work</Link>
        </div>
      </div>
    </Element>
  )
}