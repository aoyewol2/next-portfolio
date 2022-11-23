import styles from '../../styles/modules/Footer.module.scss'
import { useRef } from 'react'

export default function Footer() {

  const contactRef = useRef();

  return (
    <div className={styles.footer} id='contact' ref={contactRef}>
      <h2>Thanks for stopping by!</h2>
        Get in touch
    </div>
  )
}
