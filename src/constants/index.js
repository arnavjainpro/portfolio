import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    Java,
    swiftui,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    StuRe,
    Headstarter,
    gandiva,  
    kyroz,
    ACM,
    UTD,
    AIS,
    apple,
    WebDev,
    mentors,
    Inventory,
    STEM,
    personal,
    TBD,
    threejs,
    chatqa,
    neural,
    pdfmerger,
    aetheria,
    zypher,
    BSG,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "About",
      title: "About",
    },
    {
      id: "Work",
      title: "Work",
    },
    {
      id: "Resume",
      title: "Resume",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "Contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Cloud Engineer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "swiftui",
      icon: swiftui,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    }, 
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "ACM UTD",
      icon: ACM,
      iconBg: "#ffffff",
      date: " January 2025 - Present",
      points: [
        "Implemented 3 front-end features and optimized back-end workflows for BSG, a membership platform serving 500+ users, boosting event participation by 25%.",
        "Enhanced BSG platform for 500+ members by streamlining user flows, reducing signup time by 40%, and driving a 20% increase in event turnout.",
        ],
    },
    {
      title: "Web Specialist",
      company_name: "The University of Texas at Dallas",
      icon: UTD,
      iconBg: "#ffffff",
      date: "October 2024 - Present",
      points: [
        "Deployed Python-based web-scraping using Selenium to automate data collection for websites.",
        "Added alt-text functionality for the UTD Engineering website to make content accessible to visually impaired users.",
        ],
    },
    {
      title: "Technology Officer",
      company_name: "AIS UTD",
      icon: AIS,
      iconBg: "#1D2025",
      date: "September 2024 - Present",
      points: [
        "Spearheaded the integration of React.js components, increasing front-end efficiency by 30% and ensuring seamless data interaction between front-end and back-end systems.",
        "Enhanced user engagement by 25% through designing intuitive interfaces for new digital products, improving overall usability and customer satisfaction.",
        ],
    },
    {
      title: "Student Researcher",
      company_name: "ACM UTD",
      icon: ACM,
      iconBg: "#FFFFFF",
      date: "September 2024 - December 2024",
      points: [
        "Researched on enhancing pneumonia segmentation in lung X-ray images using innovative preprocessing techniques to improve the accuracy and reliability of AI-based medical diagnoses.",
        "Developed a user-friendly software tool integrating AI algorithms for radiologists, enhancing the accessibility and practicality of pneumonia detection in clinical settings.",
        ],
    },
    {
      title: "VP Digital Transformation",
      company_name: "Kyroz",
      icon: kyroz,
      iconBg: "#FFFFFF",
      date: "June 2024 - October 2024",
      points: [
        "Developed a platform integrating Google Authentication with Google Gemini, Google Cloud, Google Sheets, and Google Forms to facilitate the matching of co-founders and pitched the concept to venture capitalists (VCs).",
        "Organized and hosted a meetup aimed at inspiring and empowering the younger generation to drive global change through innovation and collaboration.",
        // "Fostered a community by organizing events, workshops, and online forums, ensuring active participation and continuous learning opportunities for members.",
        // "Utilized analytics tools to track and measure the effectiveness of outreach efforts, making data-informed decisions to optimize engagement strategies.",
        ],
    },
    {
      title: "Intern",
      company_name: "Gandiva",
      icon: gandiva,
      iconBg: "#82a3ca",
      date: "June 2024 - August 2024",
      points: [
        "Improved and optimized Linux environments, ensuring better performance and security.",
        "Delivered multiple presentations on cybersecurity fundamentals, focusing on topics such as kernel tuning and encryption, to prepare for the Palo Alto PCCET certification.",
        // "Developed and demonstrated technical expertise in Linux systems and cybersecurity, contributing to a comprehensive understanding of secure computing environments.",
        // "Worked collaboratively with team members to implement and test various cybersecurity measures, enhancing overall system security and reliability.",
        ],
    },
    {
      title: "Student Researcher",
      company_name: "Texas A&M University",
      icon: StuRe,
      iconBg: "#E6DEDD",
      date: "January 2024 - May 2024",
      points: [
        "Investigated advanced data analysis techniques for predictive modeling, applying various statistical tools and computational frameworks to interpret complex datasets.",
        "Conducted in-depth research on machine learning optimization, utilizing state-of-the-art algorithms to enhance computational efficiency and accuracy.",
        // "Explored innovative solutions in natural language processing, leveraging neural networks to improve language understanding and generation.",
        // "Examined cutting-edge developments in computer vision, using convolutional neural networks to process and analyze visual information from high-resolution imagery.",
      ],
    },
    {
      title: "External Support Director",
      company_name: "Aggies & Mentors",
      icon: mentors,
      iconBg: "#ffffff",
      date: "September 2023 - May 2024",
      points: [
        "Strengthened mentor relations, enhanced risk management, and spearheaded recruitment to refine the mentorship process.",
        "Expanded professional networks, forged strategic alliances, and facilitated team growth, fostering a unified and energetic workplace.",
        // "Launched training schemes, created evaluation metrics, and oversaw personnel growth, cultivating a skilled and flexible team.",
        // "Advanced marketing efforts, assessed market dynamics, and led advertising drives, boosting brand recognition and reach",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Texas A&M University",
      icon: WebDev,
      iconBg: "#E6DEDD",
      date: "June 2023 - May 2024",
      points: [
        "Crafted and sustained web applications leveraging React.js and complementary technologies.",
        "Streamlined user interfaces and optimized application performance to ensure an engaging and efficient end-user experience."
        // "Uniting with multidisciplinary teams, encompassing designers, product leaders, and developers, to produce superior-quality deliverables.",
        // "Executing adaptive designs to guarantee a consistent user experience across various web browsers.",
      ],
    },
    {
      title: "Mobile App developer",
      company_name: "Texas A&M University",
      icon: apple,
      iconBg: "#000000",
      date: "June 2023 - May 2024",
      points: [
        "Built educational apps for buisniesses by utilizing the React Native framework as well as SwiftUI.",
        "Applyed several API's to enhance the user experience and provide a seamless experience.",
        // "Implementing UI/UX design using CSS and JavaScript to improve efficiency and aethetics.",
        // "Incorporating iOS features to design and develop apps that are compatible with the latest iOS versions including the Apple Vision Pro.",
      ],
    },
    // {
    //   title: "Fellow",
    //   company_name: "Headstarter",
    //   icon: Headstarter,
    //   iconBg: "#b5bbf4",
    //   date: "June 2022 - August 2022",
    //   points: [
    //     "Acquired proficiency in diverse programming languages and frameworks, including JavaScript and Node.js, advancing my technical expertise across the full stack development spectrum.",
    //     "Engaged in hands-on projects employing Agile methodologies, enhancing my collaborative skills and agility in software project management.",
    //     // "Collaborated on solving real-world business challenges through the development of practical software solutions,",
    //     // "Analyzed and implemented best practices in UI/UX design, leveraging CSS and front-end frameworks to improve user experience and interface design skills.",
    //   ],
    // },  
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "Arnav is the best",
  //     name: "Mickey Mouse",
  //     designation: "CEO",
  //     company: "Disney",
  //     image: "https://i.etsystatic.com/27481689/r/il/c68d19/3081628078/il_570xN.3081628078_123g.jpg",
  //   },
  //   {
  //     testimonial:
  //       "Arnav is my favorite developer!",
  //     name: "Donald Duck",
  //     designation: "COO",
  //     company: "Disney",
  //     image: "https://i.pinimg.com/originals/3d/ad/a7/3dada7a669c803bf5c731f6371285754.jpg",
  //   },
  //   {
  //     testimonial:
  //       "He's so funny!",
  //     name: "Goofy",
  //     designation: "CTO",
  //     company: "Disney",
  //     image: "https://i.etsystatic.com/18587196/r/il/e81445/1644563284/il_fullxfull.1644563284_6x4t.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "BSG",
      description:
        "Web application for coders to collaborate with their peers and work on leetcode problems together.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Kafka",
          color: "pink-text-gradient",
        },
      ],
      image: BSG,
      source_code_link: "https://github.com/acmutd/bsg",
    },
    {
      name: "Neural Network",
      description:
        "A Neural Network that scans hand-written text and interprets the writing with 95% accuracy",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Kaggle",
          color: "pink-text-gradient",
        },
      ],
      image: neural,
      source_code_link: "https://github.com/arnavjainpro/neural_network",
    },
    {
      name: "Aetheria",
      description:
        "App businesses can utilize to locate the precise location of a vulnerability within the building.",
      tags: [
        {
          name: "SwiftUI",
          color: "blue-text-gradient",
        },
        {
          name: "Swift",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: aetheria,
      source_code_link: "https://github.com/arnavjainpro/Aetheria",
    },
    {
      name: "Gemni Chat Bot",
      description:
        "Chatbot that utilizes Gemni API-Key to answer and record Q&A's for the user with up-to-date information.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Gemni API",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: chatqa,
      source_code_link: "https://github.com/arnavjainpro/qachatbot",
    },
    {
      name: "STEMVERSE",
      description:
        "Web application for the younger audience to learn and get started with a career in STEM in a fun and interactive experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "C++",
          color: "pink-text-gradient",
        },
      ],
      image: STEM,
      source_code_link: "https://github.com/arnavjainpro/stemverse",
    },
    {
      name: "Inventory Insight",
      description:
        "iOS application that allows users to track their inventory and get insights on their spending habits.",
      tags: [
        {
          name: "SwiftUI",
          color: "blue-text-gradient",
        },
        {
          name: "Xcode",
          color: "green-text-gradient",
        },
        {
          name: "Tesseract",
          color: "pink-text-gradient",
        },
      ],
      image: Inventory,
      source_code_link: "https://github.com/arnavjainpro/InventoryInsight",
    },
    {
      name: "Arnav Jain Portfolio",
      description:
        "Web application giving an insightful look into my skill set as well as depicting my work experience and personal projects.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: personal,
      source_code_link: "https://github.com/arnavjainpro/portfolio",
    },
    {
      name: "PDF Merger",
      description:
        "A simple yet efficient Python program designed to combine multiple PDF files in the current directory into a single output file.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "PyPDF",
          color: "green-text-gradient",
        },
        {
          name: "Automation",
          color: "pink-text-gradient",
        },
      ],
      image: pdfmerger,
      source_code_link: "https://github.com/arnavjainpro/PDFMerger",
    },
    {
      name: "Zypher",
      description:
        "Sleek weather app designed to provide real-time weather updates with a visually appealing and user-friendly interface.",
      tags: [
        {
          name: "SwiftUI",
          color: "blue-text-gradient",
        },
        {
          name: "Swift",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: zypher,
      source_code_link: "https://github.com/arnavjainpro/Zypher",
    },
    // {
    //   name: "Its the Mickey Mouse Clubhouse! Come inside its fun inside! Its the Mickey Mouse Clubhouse",
    //   description:
    //     "Something cool!!",
    //   tags: [
    //     {
    //       name: "Mickey Mouse",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Donald Duck",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Goofy",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: TBD,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, projects, }; //testimonials };