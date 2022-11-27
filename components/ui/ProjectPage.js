
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/modules/ProjectPage.module.scss'

import Blur from '../../components/wrappers/BlurDiv'
import StarIcon from '../../components/icons/StarIcon'
import BackHome from '../../components/ui/BackHome'

export default function ProjectPage(props) {

   const title = props.title;
   const type = props.type;

   const short_desc = props.short_desc;
   const long_desc = props.long_desc;
   const longer_desc = props.longer_desc;

   const stack = props.stack;
   const role = props.role;
   const date = props.date;
   
   const image1 = props.image1;
   const image2 = props.image2;
   const image3 = props.image3;

   const link = props.link;
   const next = props.next;

   return (
      <>
         <Head>
            <title>Ashley Oyewole | {title}</title>
         </Head>

         <Blur>

            <BackHome />
            <div className={styles.title}>
               <h1>{title}</h1>
               <h3>{type}</h3>
            </div>

            <div className={styles.parent}>

               <div className={styles.main}>

                  <p className={styles.short}>
                     {short_desc}
                  </p>
                  <p className={styles.long}>
                     {long_desc}
                     <br></br>
                     <br></br>
                     {longer_desc}
                  </p>

                  <div>
                     <div className={styles.block}>
                        <StarIcon />
                     </div>
                     <h2 className={styles.block}>Links</h2>
                     <p className={styles.list}>GitHub Repo</p>
                     <p className={styles.list}>DevPost</p>
                  </div>

                  <div>
                     <div className={styles.block}>
                        <StarIcon />
                     </div>
                     <h2 className={styles.block}>Technologies Used</h2>
                     <p className={styles.list}>{stack}</p>
                  </div>

                  <div>
                     <div className={styles.block}>
                        <StarIcon />
                     </div>
                     <h2 className={styles.block}>Date</h2>
                     <p className={styles.list}>{date}</p>
                  </div>

               </div>

               <div className={styles.container}>
                  <Image
                     className={styles.image}
                     src={image1}
                     quality={100} width={600} />

                  <Image
                     className={styles.image}
                     src={image2}
                     quality={100} width={600} />
                  <Image
                     className={styles.image}
                     src={image3}
                     quality={100} width={600} />
               </div>
            </div>
            <Link href={link} className={styles.link}>
               <div className={styles.next}>
                  <h3>
                     Next Project
                  </h3>
                  <h2>{next}</h2>
               </div>
            </Link>
         </Blur>
      </>
   )
}
