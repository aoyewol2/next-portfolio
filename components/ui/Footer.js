import { useRef } from 'react'
import styles from '../../styles/modules/Footer.module.scss'

export default function Footer() {

  const contactRef = useRef();

  return (
    <div className={styles.footer} id='contact' ref={contactRef}>
        Built by Ashley Oyewole
    </div>
  )
}
