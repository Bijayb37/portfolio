import { Element } from 'react-scroll'
import styles from '../styles/About.module.scss'
import useObserver from './useObserver'

export default function About() {
  const [containerRef, position] = useObserver({
    root: null,
    rootMargin: "0px 0px -200px 0px ",
    threshold: 0.25
  });

  return (
    <Element name="about" className={styles.main}>
      <div ref={containerRef} className={styles.header}>
        <p>ABOUT</p>
        <div className={`${styles.line} ${styles[position]}`}></div>
      </div>
      <p className={`${styles.text} ${styles[position]}`}>
        Hello! My name is Bijay Bohora, I am a full stack developer primarily
        using React and NodeJS, I have been developing with react for 2 years+,
        My educational background is a bachelors in Computer Science with a data science major,
        in addition to multiple udemy courses to further improve my skills in react, redux, nodeJS.
        I have created projects using React and front end css
        frameworks such as bootstrap and material-ui, with a nodeJS backend,
        using ExpressJS and a mongoDB database.
      </p>
      <footer>
        <i className="far fa-envelope-open"> bijayb37@gmail.com</i>
        <i className="fab fa-github"> github.com/Bijayb37</i>
      </footer>
    </Element>
  )
}