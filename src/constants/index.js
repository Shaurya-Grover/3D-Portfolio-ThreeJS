import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ML/DL Engineer",
      icon: mobile,
    },
    {
      title: "Computer Vision",
      icon: backend,
    },
    {
      title: "AI",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Vision AI Project",
      company_name: "Winner at Tinkerathon",
      icon: starbucks,
      iconBg: "#383E56",
      date: "6 August 2023 - 8 August 2021",
      points: [
        " Created Blind Vision to assist visually impaired individuals, using advanced technology for real-time navigation.",
        " Developed a working model integrating AI, empowering users to navigate independently.",
        "Secured first place among 300-400 competitors at a regional tinkerathon, showcasing project effectiveness and potential.",
        "Designed for intuitive use, addressing specific needs of the visually impaired community for inclusivity and empowerment.",
      ],
    },
    {
      title: "AI/DL Computer Vision ",
      company_name: "CBSE Reigonal Science Fair",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "3 December 2023 - 5 December 2023",
      points: [
        " Enhanced Blind Vision with speech recognition and image captioning capabilities, elevating user experience and functionality.",
        "Integrated cutting-edge technology to enable seamless interaction and interpretation of surroundings for visually impaired individuals.",
        "Achieved first place out of 200 participants at the CBSE Reigonal Fair, showcasing project excellence and innovation.",
        "Qualified for nationals, highlighting the project's significance and potential impact on a larger scale.",
      ],
    },
    {
      title: "Web Development WebSockets",
      company_name: "Vivo Ignite",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "10 Jan 2024 - 23 Jan 2024",
      points: [
        "Argvoid marked the start of my journey into web development. It was my first try at making websites, showing my interest and potential in this area",
        "Argvoid is a huge space for developers where they can share their projects, organise collaborative workspaces and interact and build projects actively with people similiar to your interest.",
        "Took part in an online competition called Vivo Ignite, where over 19,000 people competed.",
        "Made it to the top 25 in the contest, shocasing my skills and potential among tough competition.",
      ],
    },
    {
      title: "Web Development",
      company_name: "Luneblaze",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "20 Jan 2023 - 20 Jan 2024",
      points: [
        "Supported in website development, contributing to the backend of their main website",
        "Collaborating with cross-functional teams of Designers and Content writers to provide better UX for users.",
        "Utilized HTML, CSS, and JavaScript.",
        "Recognised as the best Intern of the month by Luneblaze.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };