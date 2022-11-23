
import Image from 'next/image';
import Head from 'next/head';

import Reveal from '../components/wrappers/RevealDiv';
import BackHome from '../components/ui/BackHome';

import Backdrop from '../assets/backdrop.png';
import Ghost from '../assets/ghost.svg';
import styles from '../styles/modules/NotFound.module.scss';

export default function NotFound() {
	return (
		<>
		<Head>
			<title>Page Not Found</title>
		</Head>

		<Reveal>
			<div className={styles.notfound}>
				<Image className={styles.image} src={Ghost} alt='Ghost' />

				<h1 className={styles.heading}>404</h1>
				<p className={styles.text}>Page not found</p>
				<br></br>
				<BackHome/>
			</div>
		</Reveal>
		</>
	);
}
