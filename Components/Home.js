import { Element } from 'react-scroll'
import styles from '../styles/Home.module.scss'
import { Link } from 'react-scroll'

export default function Home() {
  return (
    <Element name="home" className={styles.main}>
      <div className={styles.intro}>
        <p>Hi, My Name Is</p>
        <div className={styles.myName}>
          <span style={{ color: "#ce7882" }}>Bijay Bohora &</span>
          <br />
          I'm a Full-Stack Web Developer
        </div>
        <p className={styles.info}>I specialize in React and NodeJS development, which i use to create websites along with
          with other tools such as redux, react-router, ExpressJS, MongoDB along with many others
          and the list continues to grow as I am always looking to learn and add new skills to my arsenal.
        </p>
        <div className={styles.buttons}>
          <Link to="about" className={styles.button} smooth={true} offset={-50}>Learn More About Me</Link>
          <Link to="projects" className={styles.button} smooth={true} offset={-50}>View My Work</Link>
        </div>
      </div>
    </Element>
  )
}