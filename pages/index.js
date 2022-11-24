
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/modules/Home.module.scss';

import Backdrop from '../assets/backdrop.png';
import Memoji from '../assets/image.png';

import ResumeIcon from '../components/icons/ResumeIcon';
import Blur from '../components/wrappers/BlurDiv';
import Reveal from '../components/wrappers/RevealDiv';
import Background from '../components/wrappers/Background';

import Footer from '../components/ui/Footer';
import ProjectsGrid from '../components/ui/ProjectsGrid';

export default function Home() {
	return (
		<div className={styles.container} id='home'>
			<main className={styles.main}>
				<Background>
					<Image
						src={Backdrop}
						className={styles.backdrop}
						alt='Backdrop'
						width={1400}
						quality={100} />
				</Background>

				<Blur>
					<Image
						src={Memoji}
						className={styles.image}
						alt='Ashley Oyewole'
						width={300}
						quality={100} />
				</Blur>

				<Blur>
				<span className={styles.tagline}>Hi, I'm Ashley</span>
				</Blur>

				<Reveal>
					<h1>
						A software developer with a passion for building products and systems through{' '}
						<u className={`${styles.outline} ${styles.blur}`}>software</u>
					</h1>
				</Reveal>

				<Blur>
					<Link
						href='/pdf/AshleyOyewole_Resume.pdf' target='_blank'
						className={styles.link}>
						<ResumeIcon /> Download resume
					</Link>
				</Blur>
				<ProjectsGrid />
			</main>
		</div>
	);
}
