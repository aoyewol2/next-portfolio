
import Link from 'next/link'

import StarIcon from '../../components/icons/StarIcon'

import styles from '../../styles/modules/Navigation.module.scss'
import Reveal from '../../components/wrappers/RevealDiv'

export default function Navigation() {
	return (
		<Reveal>

			<Link href='/' className={styles.home} title='Go home' style={styling}>
				<StarIcon/>
			</Link>
			
			<div className={styles.nav}>
				<Link href='/'>Home</Link>
				<Link href='/about'>About</Link>
				<Link href='/contact'>Contact</Link>
			</div>
		</Reveal>
	);
}

const styling = {
	position: 'fixed',
	left: '0',
	top: '0',
	zIndex: '10',
	userSelect: 'none',
	padding: '50px 0px 0px 50px',
	opacity: '0.8',
};
