import Link from 'next/link';

import styles from '../../styles/modules/BackHome.module.scss'

export default function BackHome() {
  return (
      <Link className={styles.home} href='/'>
          ← Back home
      </Link>
  )
}
