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
        My educational background is a bachelors in Computer Science with a data science major, in addition to
        multiple courses from places such as udemy and coursea, primarily web development focused but
        also a few courses on machine learning and reinforcement learning.
        I have been developing websites since 2017, and am always aiming to improve my skills, here are
        a few technologies that i have been working with recently.
      </p>
      <ul className={`${styles.list} ${styles[position]}`}>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Redux</li>
        <li>MongoDB</li>
        <li>Next.js</li>
        <li>Bootstrap/Material-UI</li>
      </ul>
      <p className={`${styles.text} ${styles[position]}`}>
        I enjoy problem solving and learning, and learning new technologies and creating web
        applications is a very good driver of those passions. I also am very interested in subjects
        such as AI, Music (piano & guitar), and Finance among other things.
      </p>
      <div className={styles.buttons}>
        <a className={styles.button} href='/resume.pdf' target="_blank">View My Resume</a>
        <a className={styles.button} href='https://github.com/Bijayb37' target="_blank">View My GitHub</a>
      </div>
    </Element>
  )
}