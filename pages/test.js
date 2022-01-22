import styles from '../styles/Test.module.scss'
import { Link, Element } from 'react-scroll'
import useObserver from '../Components/useObserver'
import { projectData } from '../Components/data'

export default function Test() {
  const { title, role, tech, demoUrl, imageUrl } = projectData[0]

  const [containerRef, isVisible] = useObserver({
    triggerOnce: true,
    rootMargin: '0px 0px',
    threshold: 0.5,
  });

  return (
    <div className={styles.test}>
      <div className={styles.card}>
        <div className={styles.graphics}>
          <img src={imageUrl} alt={title} />
        </div>
        <div className={styles.information}>
          <p>Featured Project</p>
          <h3>THeme</h3>
          <div className={styles.spans}>
            A minimal, dark blue theme for VS Code,
            Sublime Text, Atom, iTerm, and more. Available on Visual
            Studio Marketplace, Package Control, Atom Package Manager,and npm.
          </div>
          <ul className={styles.tech}>
            <li>VS CODE</li>
            <li>ATOM</li>
            <li>Iterm</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
