
import Head from 'next/head';
import Image from 'next/image';

import Grid from '../assets/grid.png'
import StarIcon from '../components/icons/StarIcon'
import styles from '../styles/modules/About.module.scss'
import Blur from '../components/wrappers/BlurDiv';
import Reveal from '../components/wrappers/RevealDiv';
import index from '../data/skills';
import BackHome from '../components/ui/BackHome';
import Comet from '../components/ui/Comet';

export default function About() {
	
	return (
		<>
		<Head>
			<title>Ashley Oyewole | About</title>
		</Head>

		<div className={styles.main}>
			<Reveal>
				<div className={styles.container}>
					<Image
						src={Grid}
						className={styles.backdrop}
						alt='Backdrop'
						width={500}
						quality={100} />	
				</div>

				<Comet/>
				<Blur>
					<BackHome/>
					<h1>Hi, I'm Ashley</h1>

					<h3 className={styles.headline}>
						Nice to meet you
					</h3><br/>

					<p className={styles.text}>
						I'm a software developer currenty studying <a href='https://uwo.ca/' target='_blank' className={styles.link}>@Western University</a>, as a 2nd year Computer Science student.
					</p>

					<p className={styles.text}>
						I'm a Digital Media Designer <a href='https://csd.uwo.ca/' target='_blank' className={styles.link}>@Western University</a>, developing interactive course material for course sites, and a Frontend Developer <a href='https://csus.csd.uwo.ca/' target='_blank' className={styles.link}>@CS Undergrad Society</a>. 
					</p>

					<p className={styles.text}>
						I'm passionate about everything software and design related, and making user interfaces and products that are accessible for everyone. I'm always learning new technologies, and building interactive projects with them.
					</p>
				</Blur>

				<Blur>
					<br />
					<div className={styles.block}>
						<StarIcon />
					</div>
					<h2 className={styles.block}>Technologies I work with</h2>

					<p className={styles.text}>
						I work with these tools and languages through my place of work, school projects and side projects.
					</p>
					<div className={styles.row}>

						{ index.skills.map((skill) =>
							<span className={styles.tag}>
								{skill}
							</span>
						)}
					</div>
				</Blur>
				
			</Reveal>
		</div>
		</>
	);
}
