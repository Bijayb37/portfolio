import styles from '../styles/Navbar.module.scss';
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          Bijay Bohora
        </div>
        <div className={styles.linksMenu}>
          <ScrollLink containerId="containerElement" activeClass={styles.active} offset={-50} to="home" spy={true} >Home</ScrollLink>
          <ScrollLink containerId="containerElement" activeClass={styles.active} offset={-50} to="projects" spy={true} >Projects</ScrollLink>
          <ScrollLink containerId="containerElement" activeClass={styles.active} offset={-50} to="about" spy={true} >About</ScrollLink>
        </div>
      </div>
    </nav>
  )
}