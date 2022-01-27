import styles from '../styles/Navbar.module.scss'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          Bijay Bohora
        </div>
        <div className={styles.linksMenu}>
          <ScrollLink activeClass={styles.active} offset={-50} to="home" spy={true} smooth={true}>Home</ScrollLink>
          <ScrollLink activeClass={styles.active} offset={-50} to="about" spy={true} smooth={true}>About</ScrollLink>
          <ScrollLink activeClass={styles.active} offset={-50} to="projects" spy={true} smooth={true}>Projects</ScrollLink>
        </div>
      </div>
    </nav>
  )
}