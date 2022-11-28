import Placeholder from '../assets/placeholder.png'

export default {
    projects: [
        {   
            id: 1,
            title: 'PostWize',
            type: 'Web app',
            short_desc: 'Store your career resources in one site',

            long_desc: 'PostWize is a frontend project designed to streamline the job application process. Users can see pending applications on job sites, chat and schedule meetings with recruiters, upload application materials, and track upcoming events with a personalized calendar.',

            longer_desc: 'Won Best Web Development at Uncommon Hacks 2022',

            preview: Placeholder,
            url: '/projects/postwize',
            stack: 'HTML • CSS • Bootstrap',
            date: 'Spring 2022',

            highlights: 'Won Best Web Development at Uncommon Hacks 2022'
        },
        
        {
            id: 2,
            title: 'Sports Database',
            type: 'Terminal app',
            short_desc: 'Create, update and track sports teams',

            long_desc: 'Sports Database tracker is a C-based database system that allows users to store, sort, and return sports team records. It is a simulated sports team tracker where users can add, delete, modify and view up to 32 sports teams.',
             
            longer_desc: 'The program stores team names, countries, team colours and more. The database was created by using structs, arrays and pointers.',

            preview: Placeholder,
            url: '/projects/sports-database',
            stack: 'C • Console based',
            date: 'Fall 2022'
        },

        {
            id: 3,
            title: 'Intelliview',
            type: 'Web app',
            short_desc: 'Improve and boost your interview skills',

            long_desc: 'Intelliview is a comprehensive platform that stores job applications, past interviews, and advice for students to effectively prepare for future interviews at their dream company.',

            longer_desc: 
            <div>
            Intelliview makes it easy to navigate through applications featuring a kanban board and simplifies the interview process to increase actionable insights and reduce recruiting stress.
            <br/><br/>Won 2nd Place Overall at SheHacks 2022.
            </div>,

            preview: Placeholder,
            url: '/projects/intelliview',
            stack: 'React • HTML • CSS',
            date: 'Winter 2022'
        },
    ],

}