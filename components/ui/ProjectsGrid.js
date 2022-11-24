
import Link from 'next/link'

import styles from '../../styles/modules/Projects.module.scss'
import Placeholder from '../../components/ui/Placeholder'

import Grid from '../../data/projects/main'

export default function ProjectsGrid() {
  return (
    <div className={styles.main}>
        <h2 className={styles.heading}>Selected Work</h2>

      {
      Grid.projects.map((project, index) =>

        <Link href={project.url}>

          <div className={styles.container} key={index}>
            <div className={styles.text}>
              
              <h3>{project.type}</h3>
              <h2>{project.title}</h2>

            </div>
            {
              project.preview === false ? <p>Image not found</p> :
                <Placeholder/>
            }

          </div>
        </Link>
      )
      }
      
    </div>
  )
}