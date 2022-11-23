
import Icons from '../../data/socials'
import Reveal from '../../components/wrappers/RevealDiv';
import styles from '../../styles/modules/Icons.module.scss'

export default function SocialIcons() {
  return (
    <Reveal>
      <div className={styles.icons}>
          {Icons.socials.map((icon, index) =>

            <div className={styles.icon} key={index}>
              <a href={icon.url} title={icon.title} target={icon.newTab}>
                {icon.img}
              </a>
            </div>
          )}
      </div>
    </Reveal>
  )
}
