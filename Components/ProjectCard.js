import React from 'react'
import styles from '../styles/ProjectCard.module.scss'
import Icon from './icons'
import Image from 'next/image'

export default function ProjectCard({ data, index }) {
  const { title, role, tech, demoUrl, imageUrl } = data
  const bgColors = ['#4A2BAF', '#0F61C0', '#9E2B79', '#4146B5']

  return (
    // <a href={demoUrl}>
    <div className={styles.card} style={{ backgroundColor: bgColors[index % 4] }}>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.secondary}>
          <div className={styles.services}>
            {role.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
          <div className={styles.tech}>
            {tech.map(t => (
              <div key={t} className={styles.techIcon}>
                <Icon white>{t}</Icon>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className={styles.images}>
        <img src={imageUrl} alt={title} />
      </div>
    </div>
    // </a>
  )
}
