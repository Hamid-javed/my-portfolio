import Elearn from "./../assets/portfolioImages/elearn.png"
import LinkUp from "./../assets/portfolioImages/linkup.png"
import Soicalmedia from "./../assets/portfolioImages/socialmedia.png"
import DemoPortfolio from "./../assets/portfolioImages/demo-profolio.png"
import ElarnAdmin from "./../assets/portfolioImages/E-learn-admin.png"
import ChatBot from "./../assets/portfolioImages/chatbot.png"
import NeuroMail from "./../assets/portfolioImages/NeuroMail.png"
import neuroDrive from "./../assets/portfolioImages/neuroDrive.png"

const ProjectsData = [
  {
    id: "Elearn",
    img: Elearn,
    name: "Project E-Learning",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://elearnportal.uno/login",
    source: "https://github.com/Hamid-javed/E-learn-frontend.git",
    description:
      " developed a full-stack learning platform where users can browse and access courses uploaded by mentors across various topics. Using React.js for the frontend and Node.js with MongoDB Atlas for backend efficiency, the platform ensures seamless data handling. The responsive design, built with Tailwind CSS and CSS, ensures accessibility on all devices. With JavaScript and supporting libraries, the platform offers a smooth and user-friendly experience.",
  },
  {
    id: "NeuroMail",
    img: NeuroMail,
    name: "Neuromail - Modern Web-Based Email Client (Gmail Alternative)",
    stack: ["< RESTful API />", "< Tailind CSS />", "< React.js />", "< JavaScript (ES6+) />", "< Git & GitHub />"],
    live: "https://mailing.neuromail.digital/",
    // source: "https://github.com/Hamid-javed/link-up.git",
    description:
      "Neuromail is a responsive, Gmail-like email platform. I built the frontend with React.js and Tailwind CSS using a mobile-first approach. I collaborated with backend developers to integrate RESTful APIs and ensure smooth data flow. The app was optimized for performance and deployed to a cloud environment for production use.",
  },
  {
    id: "NeuroDrive",
    img: neuroDrive,
    name: "NeuroDrive - Google Drive Alternative with File Encryption & Secure Sharing",
    stack: ["< RESTful API />", "< File Encryption & Password Protection />", "< React.js />", "< JavaScript (ES6+) />", "< Git & GitHub />", "< PDF, DOC & Excel Viewer/Editor Integration />"],
    live: "https://dashboard.neurodrive.me/",
    // source: "https://github.com/Hamid-javed/link-up.git",
    description:
      "NeuroDrive is a secure cloud storage platform offering file encryption, password-protected sharing, and online editing for PDF, Word, and Excel files. I developed the frontend using React.js and Tailwind CSS, integrated RESTful APIs, and ensured a fully responsive, user-friendly interface for managing, editing, and sharing files securely.",
  },
  {
    id: "E-Learn-admin",
    img: ElarnAdmin,
    name: "E-Learning Admin Panel",
    stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "https://e-learn-admin.netlify.app/",
    source: "https://github.com/Hamid-javed/E-Learn-Admin.git",
    description:
      "This is the admin panel for the E-Learning platform. Here, the admin can add new courses, delete existing courses, update course details, add new mentors, and remove existing mentors. Admins can also access user data, including purchased courses and courses in wishlists. Additionally, this admin panel provides graphical data on metrics such as monthly bought courses, most liked courses, most reviewed courses, and monthly sales. This admin panel allows for complete control of the E-Learning platform. It is fully responsive and includes Tailwind CSS, CSS, React.js, and other libraries."
  },
  {
    id: "ChatBot",
    img: ChatBot,
    name: "ChatBot",
    stack: ["< Vite />", "< CSS3 />", "< TypeScript />"],
    live: "https://hamids-chatbot.netlify.app/",
    source: "https://github.com/Hamid-javed/Chat-Bot",
    description:
      "The AI-powered chatbot, built with Vite and TypeScript, provides real-time interactions using natural language processing. It features a responsive UI, efficient state management, and seamless API integration for smooth and dynamic conversations. Designed for speed and scalability, it ensures quick responses and an intuitive user experience."
  },
  {
    id: "linkup",
    img: LinkUp,
    name: "Link Up Landing Page",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://link-upsocial.netlify.app/",
    source: "https://github.com/Hamid-javed/linkup.git",
    description:
      "A landing page for a social media Application. Its a single page website build using react>js and tailwind CSS from figma design.",
  },
  {
    id: "Soicalmedia",
    img: Soicalmedia,
    name: "Soical Media Application Backend",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "",
    source: "https://github.com/Hamid-javed/link-up.git",
    description:
      "The backend for this social media application is built with Node.js and MongoDB, providing a scalable foundation for user interactions and data management. It features user authentication, post management, commenting, liking, real-time notifications, and a chat system, all accessible through a robust RESTful API. This architecture ensures high performance and security, making it ideal for a dynamic social media platform",
  },


  // {
  //   id: "DemoPortfolio",
  //   img: DemoPortfolio,
  //   name: "A Demo Portfolio",
  //   stack: ["< React.js />", "< CSS3 />"],
  //   live: "https://portfolio-practice-demo.netlify.app/",
  //   source: "https://github.com/Hamid-javed/Demo-Portfolio.git",
  //   description:
  //     "Multi-page space tourism website provides relevent information for users. It has a responsive design and navigation. A large and complex project that required me to plan ahead and break down the work into smaller chunks. I used React.js to build the website and CSS3 for styling.",

  // },
  // {
  //   id: "DemoPortfolio",
  //   img: DemoPortfolio,
  //   name: "A Demo Portfolio",
  //   stack: ["< React.js />", "< CSS3 />"],
  //   live: "https://portfolio-practice-demo.netlify.app/",
  //   source: "https://github.com/Hamid-javed/Demo-Portfolio.git",
  //   description:
  //     "Multi-page space tourism website provides relevent information for users. It has a responsive design and navigation. A large and complex project that required me to plan ahead and break down the work into smaller chunks. I used React.js to build the website and CSS3 for styling.",

  // },




  // {
  //   id: "todo",
  //   img: Todo,
  //   name: "JavaScript Todo App",
  //   stack: ["< JavaScript />  ", "< Sass />"],
  //   live: "https://rimshub.github.io/JavaScript-Todo-App/",
  //   source: "https://github.com/rimshub/JavaScript-Todo-App",
  //   description:
  //     "Responsive JS todo app with color theme switcher. Enables users to add, delete, filter, and clear day-to-day tasks. It has user-friendly interface and navigation. I was able to practice my JavaScript and Sass skills in this project.",
  // },

  // {
  //   id: "dropdown-nav",
  //   img: Page,
  //   name: "Homepage with dropdown navigation / Figma to React",
  //   stack: ["< React.js />   ", "< CSS3 />"],
  //   live: "https://rimshub.github.io/figma-design-to-reactjs/",
  //   source: "https://github.com/rimshub/figma-design-to-reactjs",
  //   description:
  //     "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge. As a front-end developer, I was able to practice my React.js and CSS3 skills in this project.",
  // },

];

// const InprogressProjectsData = [

//   {
//     id: "url-short",
//     img: landingPage,
//     name: "URL shortening API landing page",
//     stack: ["< JavaScript />", "< NodeJS />"],
//     live: "",
//     source: "https://github.com/rimshub/URL-shortening-API-landing-page",
//     description:
//       "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
//   },

// ];

const projects = { ProjectsData };

export default projects;
