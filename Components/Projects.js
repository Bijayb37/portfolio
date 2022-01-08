import { Element } from 'react-scroll'
import styles from '../styles/Projects.module.scss'
import { projectData } from './data'
import ProjectCard from './ProjectCard'

export default function Projects() {

  const cards = projectData.map((d, i) => <ProjectCard key={i} data={d} index={i}/>)
  return (
    <Element name="projects" className={styles.main}>
      <h1>Click For Demo</h1>
      <div className={styles.cardContainer}>
        {cards}
      </div>
    </Element>
  )
}

