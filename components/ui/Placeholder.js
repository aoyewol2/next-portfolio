
import Image from 'next/image'
import placeholder from '../../assets/placeholder.png'
import styles from '../../styles/modules/Projects.module.scss'

export default function Placeholder() {
  return (
      <Image
        className={styles.image}
        src={placeholder}
        quality={100} width={800} />
  )
}
