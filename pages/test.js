import styles from '../styles/Test.module.scss'
import { Link, Element } from 'react-scroll'
import useObserver from '../Components/useObserver'

export default function Test() {
  const [containerRef, isVisible] = useObserver({
    triggerOnce: true,
    rootMargin: '0px 0px',
    threshold: 0.5,
  });

  return (
    <div className={styles.test}>
      <div className={styles.thing}>Hell</div>
      <div ref={containerRef} className={styles.testing}>
        { isVisible && "This is Testing" }
      </div>
      {/* <div ref={containerRef} className={isVisible ? styles.circle : ""}>
        This exist
      </div> */}
    </div>
  )
}
