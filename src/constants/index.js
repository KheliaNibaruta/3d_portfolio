import { horamama, glice, starbucks, catho } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Lille catholic University",
        icon: catho,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - Sep 2023",
        points: [
            "Participate in workshops to gather needs",
            "Produce a prototype, organize and monitor user tests using Figma and InVision.",
            "Developing new features and maintaining a web plateform using PHP5, MySQL, CSS3, HTML5, SASS and related technologies",
            "Collaborating with cross-functional teams including Instructional designers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "GLICE Burundi",
        iconBg: "#b7e4c7",
        date: "Nov 2020 - May 2020",
        points: [
            "Participating in workshops to gather needs",
            "Developing and maintaining web applications using PHP5 and other related technologies.",
            "Collaborating with cross-functional teams including managers.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "HORAMAMA Coffee Dry Mill",
        icon: horamama,
        iconBg: "#a2d2ff",
        date: "Jan 2019 - Feb 2019",
        points: [
            "Participating in workshops to gather needs.",
            "Creating a database using MySQL.",
            "Create a company inventory management web application in a responsive design using PHP5, HTML5, CSS3, Bootstrap.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon clone',
        description: 'Built a complete clone of Amazon, allowing users to add to basket and buy products.',
        link: 'https://github.com/KheliaNibaruta/amazon-clone',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'E-Commerce platform',
        description: 'Built a complete E-commerce plateform, allowing users to make purchases and admins to add products, and track orders.',
        //link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: '3d portfolio',
        description: 'Built a Three.js portfolio.',
        link: 'https://github.com/KheliaNibaruta/3d_portfolio',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Master project',
        description: 'Built an accessibility based website .',
        link: 'https://github.com/KheliaNibaruta/master-project-front',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'To come',
        //description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        //link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'To come',
        //description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        //link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    }
];