// import RestCountries from "./../assets/portfolioImages/restcountries.jpg";
// import SpaceTourism from "./../assets/portfolioImages/spacetourism.jpg";
// import Advice from "./../assets/portfolioImages/advice.jpg";
// import Page from "./../assets/portfolioImages/intropage.jpg";
// import AWS from "./../assets/portfolioImages/s3.PNG";
// import Todo from "./../assets/portfolioImages/todo.jpg"
// import Vanlife from "./../assets/portfolioImages/vanlife.png"
import Elearn from "./../assets/portfolioImages/elearn.png"
import LinkUp from "./../assets/portfolioImages/linkup.png"
import Soicalmedia from "./../assets/portfolioImages/socialmedia.png"
import DemoPortfolio from "./../assets/portfolioImages/demo-profolio.png"
import ElarnAdmin from "./../assets/portfolioImages/E-learn-admin.png"

// in progress projects

// import Servista from './../assets/portfolioImages/servista.png'
// import landingPage from './../assets/portfolioImages/url.jpg'

const ProjectsData = [
  {
    id: "Elearn",
    img: Elearn,
    name: "Project E-Learning",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://link-upsocial.netlify.app/",
    source: "https://github.com/Hamid-javed/E-learn-frontend.git",
    description:
      " developed a full-stack learning platform where users can browse and access courses uploaded by mentors across various topics. Using React.js for the frontend and Node.js with MongoDB Atlas for backend efficiency, the platform ensures seamless data handling. The responsive design, built with Tailwind CSS and CSS, ensures accessibility on all devices. With JavaScript and supporting libraries, the platform offers a smooth and user-friendly experience.",
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

  {
    id: "DemoPortfolio",
    img: DemoPortfolio,
    name: "A Demo Portfolio",
    stack: ["< React.js />", "< CSS3 />"],
    live: "https://portfolio-practice-demo.netlify.app/",
    source: "https://github.com/Hamid-javed/Demo-Portfolio.git",
    description:
      "Multi-page space tourism website provides relevent information for users. It has a responsive design and navigation. A large and complex project that required me to plan ahead and break down the work into smaller chunks. I used React.js to build the website and CSS3 for styling.",

  },
  // {
  //   id: "cloud-storage",
  //   img: AWS,
  //   name: "Cloud Storage with AWS Simple Storage Service",
  //   stack: ["< AWS S3 /> " , "< JavaScript /> " , "< Express.js />"],
  //   live: "",
  //   source: "https://github.com/rimshub/cloud-storage-s3",
  //   description:  
  //       "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge",
  // },

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

export default { ProjectsData } 