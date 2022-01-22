import React from 'react'
import styles from '../styles/ProjectCard.module.scss'
import useObserver from './useObserver'

export default function ProjectCard({ data, index }) {
  const { title, description, tech, demoUrl, githubUrl, imageUrl } = data
  const bgColors = ['#4A2BAF', '#0F61C0', '#9E2B79', '#4146B5']
  const [containerRef, position] = useObserver({
    root: null,
    rootMargin: "100px 0px 100px 0px",
    threshold: 0.25
  }, index);

  return (

    <div ref={containerRef}>
      <div className={styles.card}>
        <div className={styles.graphics}>
          <img src={imageUrl} alt={title} />
        </div>
        <div className={styles.information}>

          <h3>{title}</h3>
          <div className={styles.spans}>
            {description}
          </div>
          <ul className={styles.tech}>
            {tech.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className={styles.tech}>
            <a href={githubUrl} target="_blank">Github</a>
            <a href={demoUrl} target="_blank">Live App</a>
          </div>
        </div>
      </div>
    </div>
  )
}
