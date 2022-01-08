import { Element } from 'react-scroll'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Element name="home" className={styles.main}>
      <div className={styles.intro}>
        <h1 className={styles.myName}>
          Hi, I'm Bijay
        </h1>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More About Me</button>
          <button className={styles.button}>View My Work</button>
        </div>
      </div>
    </Element>
  )
}