import { Socials, Post, ItemList } from "./Types";

export const mySocials: Socials = {
    'Linkedin': 'https://www.linkedin.com/in/jayleeco',
    'Github': 'https://www.github.com/literaryverses',
    'Goodreads': 'https://www.goodreads.com/late_onset_neurocephalous',
    'Discord': 'https://www.discordapp.com/users/912186876788625428'
};


export const myCollections: {[key: string]: Post[]} = {
    'projects': [
        {
            date: new Date('2025-01-05'),
            title: 'Malware',
            description: 'Submission to Chili Code Game Jam 2024',
            url: 'https://collisteru.itch.io/malware',
            imageUrl: '/images/malware.png'},
        {
            date: new Date('2024-08-20'),
            title: 'Rat Him Out!',
            description: 'Submission to the 2024 GMTK Game Jam',
            url: 'https://collisteru.itch.io/rat-him-out',
            imageUrl: '/images/rat_him_out_opening.png'
        },
        {
            date: new Date('2024-02-11'),
            title: 'Phonopro',
            description: 'A website to teach the International Phonetic Alphabet',
            url: 'https://phonopro.netlify.app/',
            imageUrl: '/images/phonopro.png'
        },
        {
            date: new Date('2023-07-06'),
            title: 'Daedalus',
            description: 'An ASCII maze-generating Discord bot',
            url: 'https://github.com/literaryverses/Daedalus',
            imageUrl: '/images/discord_bot.png'
        },
        {
            date: new Date('2023-06-22'),
            title: 'Spacey',
            description: 'Simulation of moving through wormholes and starfields',
            url: 'https://literaryverses.itch.io/spacey',
            imageUrl: '/images/spacey.png'
        },
    ],
    'blog': [
        {
            date: new Date('2024-04-24'),
            title: 'How to Approach Conflict',
            description: 'Five simple advices for self-actualization in face of adversity',
            url: 'conflict',
            imageUrl: '/images/seminar.png'},
        {
            date: new Date('2017-04-14'),
            title: 'How Writing Taught Me Self-Acceptance',
            description: 'An Admission Essay',
            url: 'writing',
            imageUrl: '/images/writing.png'
        },
        {
            date: new Date('2016-11-11'),
            title: 'Stop Pretending to be an Economist',
            description: "It's the Economy, Stupid",
            url: 'economy',
            imageUrl: '/images/economy.png',
            details: 'This was an op-ed that I wrote for my university newspaper, The Sentry, back in 2016/2017'
        },
        {
            date: new Date('2013-05-01'),
            title: 'My Valedictorian Speech That Never Was',
            description: 'Why My School Stopped Me From Talking At Graduation',
            url: 'graduation',
            imageUrl: '/images/graduation.png',
            details: 'At my high school, you had to audition to give the valedictorian speech at graduation. Which really miffed me because I was actually the valedictorian at the time of the audition. Unfortunately, my speech was not chosen.'
        },
        {
            date: new Date('2011-12-25'),
            title: 'A Christmas Prayer',
            description: 'A Poem Recounted by Ebenezer Scrooge',
            url: 'christmas',
            imageUrl: '/images/christmas.png',
            details: 'I wrote this for a few friends back in high school.'
        },
    ],
    'reviews': []
}

export const myLists: {[key: string]: ItemList[]} = {
    'reads': [
        {   
            date: new Date('2025-08-20'),
            title: 'The Annotated Moby Dick',
            url: 'moby_dick'
        },
    ]
}