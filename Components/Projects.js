import { useState, useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import styles from '../styles/Projects.module.scss'
import { projectData } from './data'
import ProjectCard from './ProjectCard'
import useObserver from './useObserver'

export default function Projects() {
  const [containerRef, position] = useObserver({
    root: null,
    rootMargin: "0px 0px -200px 0px ",
    threshold: 0.25
  });

  const cards = projectData.map((d, i) => <ProjectCard key={i} data={d} index={i} />)
  return (
    <Element name="projects" className={styles.main}>
      <div ref={containerRef} className={styles.header}>
        <p>PROJECTS</p>
        <div className={`${styles.line} ${styles[position]}`}></div>
      </div>
        <p className={styles.click}>To View Projects Click On The Title In The Card</p>
      <div className={styles.cardContainer}>
        {cards}
      </div>
    </Element>
  )
}