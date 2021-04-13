import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Matt Argenziano - Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Matt Argenziano',
  subtitle: 'I create modern, stunning web pages.',
  cta: 'See My Work',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I\'m a Shippensburg University Graduate from Easton, Pennsylvania. I am currently working as a consultant for Fitch Ratings as an Information Security Analyst. I am hoping to become a full-time Web Developer. The technologies I am currently using are HTML, CSS, Javascript, and the Fetch API. I hope to keep learning new technologies in the future.',
  paragraphTwo: 'You can see my LinkedIn or GitHub pages through the links at the bottom of the page.',
  paragraphThree: 'I\m excited to get started on my next project.',
  resume: 'https://www.dropbox.com/s/d7nsjhjjhtl09ju/Resume%20%281%29.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cfportfolio.PNG',
    title: 'Photography Portfolio',
    info: 'Portfolio created for my friend Connor to showcase his Photography and Videography skills. The project was built from scratch using HTML5, CSS3, and JavaScript.',
    info2: '',
    url: 'https://www.frasiermedia.com',
    repo: 'https://github.com/MattArgenziano/Connor-Frasier-Portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'e-commerce_ouqpue.png',
    title: 'One-Page E-Commerce Site',
    info: 'This project is a fake E-Commerce site built with Bootstrap 5. This project utilizes the Google Maps API to get the \'Location\' of the store.',
    info2: '',
    url: 'https://e-commerce-google-api.netlify.app/',
    repo: 'https://github.com/MattArgenziano/e-commerce-site', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'f1Results.PNG',
    title: 'Formula 1 Race Results',
    info: 'This is a passion project as I\'m a big Formula 1 fan. The project utilizes the Ergast Motor Racing API to get the results. I used Skeleton CSS for the simple styling.',
    info2: '',
    url: 'https://f1-results.netlify.app/',
    repo: 'https://github.com/MattArgenziano/f1-results-api', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get in Touch',
  btn: 'Contact Me',
  email: 'https://www.linkedin.com/in/matthew-argenziano-407901152/',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/matthew-argenziano-407901152/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MattArgenziano',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
