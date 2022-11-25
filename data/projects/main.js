import Placeholder from '../../components/ui/Placeholder'

export default {
    projects: [
        {   
            id: '1',
            title: 'PostWize',
            type: 'Web app',
            short_desc: 'Store your career resources in one site.',

            long_desc: 'PostWize is a frontend project designed to streamline the job application process. Users can see pending applications on job sites, chat and schedule meetings with recruiters, upload application materials, and track upcoming events with a personalized calendar, and add their PostWize calendar to their personal calendar.',

            preview: <Placeholder/>,
            url: '/postwize',
            stack: 'CSS, Bootstrap',
            role: 'Developer',
            date: 'Spring 2022',

            highlights: 'Won Best Web Development at Uncommon Hacks 2022'
        },
        {
            id: '2',
            title: 'Sports Database',
            type: 'Terminal app',
            short_desc: 'A C-Based database system',
            long_desc: '',
            preview: <Placeholder/>,
            url: 'projects/sports-database',
            stack: 'C Language',
            role: 'Developer',
            date: 'Fall 2022'
        },
    ],

}