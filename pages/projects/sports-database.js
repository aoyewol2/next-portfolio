
import ProjectPage from "../../components/ui/ProjectPage";
import Data from '../../data/projects/main'

export default function SportsDatabase() {
   return (
      <>
         {
            Data.projects.filter(project => project.id == 2).map(projectID => (

               <ProjectPage

                  title={projectID.title}
                  type={projectID.type}

                  short_desc={projectID.short_desc}
                  long_desc={projectID.long_desc}
                  longer_desc={projectID.longer_desc}

                  stack={projectID.stack}
                  date={projectID.date}

                  image1={projectID.preview}
                  image2={projectID.preview}
                  image3={projectID.preview}

                  link='/projects/intelliview'
                  next='Intelliview'

               />
            ))}

      </>
   )
}
