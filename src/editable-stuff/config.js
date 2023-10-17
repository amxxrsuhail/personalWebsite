// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ameer",
  middleName: "",
  lastName: "Suhail",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/amxxrsuhail",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/amxxrsuhail/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/k-ameer-suhail-aba0b8216/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ameersuhail.jpg"),
  imageSize: 375,
  message:
    "Hello, I'm K Ameer Suhail, a graduate from APJ Abdul Kalam Technological University. I'm a passionate Full Stack Developer with expertise in the MERN stack. For the past few months, I've been immersed in the fascinating world of airport technology at a product-based company. Beyond the code, I'm driven by a deep desire to give back to the community. Join me on my journey to blend technology and impact within the software engineering landscape",
  resume:
    "https://drive.google.com/file/d/1gbK9MI3PmjASStqkrdhoOs7IUlsPwLeG/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "amxxrsuhail", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["materialUIDashboard","Pokedex","Firebase-Authentication ","googleKeepClone","todoList","blogWebsite","simonGame","product-website"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/ameersuhail.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/ameersuhail.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    // { name: "Python", value: 60 },
    { name: "MongoDB", value: 55 },
    { name: "MySQL", value: 50 },
    { name: "ExpressJS", value: 70 },
    // { name: "EJS", value: 50 },
    { name: "NodeJS", value: 70 },
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 70 },
    { name: "React", value: 90 },
    { name: "Redux", value: 70 },
    { name: "HTML/CSS", value: 90 },
    { name: "Tailwind CSS", value: 90 },
    { name: "AWS", value: 50 },
    { name: "BIRT", value: 90 },
    { name: "Jest", value: 80 },
    { name: "Firebase", value: 60 },
  ],
  softSkills: [
    { name: "Goal Identification", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Leadership", value: 75 },
    { name: "Decision-making", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Conflict Mediation", value: 90 },
    { name: "Innovation", value: 70 },
    { name: "Creativity", value: 75 },
    { name: "Interpersonal Skills", value: 85 },
    { name: "Adaptability", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Let's connect and explore how I can help your business grow with my expertise in web development. If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "kameer41099@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Web Developer", // Here Add Company Name
      company: "Lenok Solutions", // Here Add Company Name
      companylogo: require("../assets/img/logo.png",),
      date: "Feb 2023 – Present",
    },
    // {
    //   role: "Front-End Developer",
    //   companylogo: require("../assets/img/boeing.png"),
    //   date: "May 2017 – May 2018",
    // },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
