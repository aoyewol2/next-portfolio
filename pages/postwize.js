import Head from 'next/head';
import styles from '../styles/modules/ProjectPage.module.scss'
import Blur from '../components/wrappers/BlurDiv'
import StarIcon from '../components/icons/StarIcon'

export default function ProjectPage(props) {

   const title = props.title;
   const type = props.type;

   const short_desc = props.short_desc;
   const long_desc = props.long_desc;

   const stack = props.stack;
   const role = props.role;

   const date = props.date;

   return (
      <>
         <Head>
            <title>Ashley Oyewole | {title}</title>
         </Head>

         <Blur>
            <div className={styles.main}>
               <div className={styles.title}>
                  <h2>PostWize</h2>
                  <h3>Web app</h3>
               </div>

               <p className={styles.short}>
                  Store your career resources in one site.
               </p>
               <p className={styles.long}>
                  PostWize is a frontend project designed to streamline the job application process. Users can see pending applications on job sites, chat and schedule meetings with recruiters, upload application materials, and track upcoming events with a personalized calendar, and add their PostWize calendar to their personal calendar.
               </p>

               <div>
                  <div className={styles.block}>
                     <StarIcon />
                  </div>
                  <h1 className={styles.block}>Technologies Used</h1>
                  <p>CSS • Bootstrap • Netlify</p>
               </div>

               <div>
                  <div className={styles.block}>
                     <StarIcon />
                  </div>
                  <h1 className={styles.block}>Role</h1>
                  <p>Developer</p>
               </div>

            </div>

            <div className={styles.images}>

            </div>
         </Blur>
      </>
   )
}
