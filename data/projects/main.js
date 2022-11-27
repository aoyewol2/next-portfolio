import Placeholder from '../../assets/placeholder.png'

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
            short_desc: 'Store and update sports teams',
            long_desc: 'not finish',
            preview: Placeholder,
            url: '/projects/sports-database',
            stack: 'C Language',
            date: 'Fall 2022'
        },

        {
            id: 3,
            title: 'Intelliview',
            type: 'Web app',
            short_desc: 'Improve your interview skills',
            long_desc: '',
            preview: Placeholder,
            url: '/projects/intelliview',
            stack: 'React, HTML, CSS,',
            date: 'Winter 2022'
        },
    ],

}