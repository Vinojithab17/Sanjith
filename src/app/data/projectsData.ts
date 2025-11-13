// Project type definition
interface Project {
  id: number | string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  image: string;
  githubLink: string;
  liveLink: string;
  duration: string;
  teamSize: string;
  role: string;
  sections : Section[]
}

interface Section{
  id : string
  heading : string
  content : string[]
  image : string
}

export const projectsData: Project[] = [
 
  {
    id: 5,
    title: "Social Media Analytics",
    description: "A comprehensive analytics platform for tracking social media performance and engagement metrics.",
    longDescription: `This social media analytics platform helps businesses and creators understand their social media performance. 
    It provides detailed insights into engagement rates, follower growth, content performance, and audience demographics.
    
    The platform supports multiple social media platforms including Instagram, Twitter, Facebook, and LinkedIn. 
    Users can generate custom reports, set up automated alerts, and track competitor performance.
    
    Advanced features include sentiment analysis, hashtag tracking, and predictive analytics for optimal posting times.`,
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "D3.js", "Socket.io", "JWT"],
    features: [
      "Multi-platform social media integration",
      "Real-time analytics dashboard",
      "Custom report generation",
      "Competitor analysis tools",
      "Sentiment analysis",
      "Automated alerts and notifications",
      "Data visualization with charts",
      "API for third-party integrations"
    ],
    challenges: [
      "Handling large volumes of social media data",
      "Real-time data processing and updates",
      "Integrating multiple social media APIs",
      "Creating intuitive data visualizations",
      "Ensuring data accuracy and reliability"
    ],
    solutions: [
      "Implemented Redis caching for improved performance",
      "Used WebSocket connections for real-time updates",
      "Created unified API layer for multiple social platforms",
      "Utilized D3.js for interactive and responsive charts",
      "Implemented data validation and error handling systems"
    ],
    image: "/images/image.jpg",
    githubLink: "https://github.com/username/social-analytics",
    liveLink: "https://social-analytics-demo.com",
    duration: "4 months",
    teamSize: "Team of 3",
    role: "Full-stack Developer",
     sections: [
    {
      id: "overview",
      heading: "Overview",
      content:
        ["This project demonstrates a real-time data streaming application using Golang for backend and React for frontend."],
      image: "/images/image.jpg",
    },
    {
      id: "architecture",
      heading: "Architecture",
      content:
        ["The system follows a microservices architecture with gRPC for communication and WebSocket for real-time updates."],
      image: "/images/image.jpg",
    },
    {
      id: "technologies",
      heading: "Technologies Used",
      content:
        ["Key technologies include Golang, gRPC, SQLite, Flutter for the mobile interface, and Docker for containerization."],
      image: "/images/image.jpg",
    },
    {
      id: "challenges",
      heading: "Challenges & Solutions",
      content:
        ["One major challenge was handling concurrent clients efficiently. This was solved using Goroutines and channels in Go.",],
      image: "/images/image.jpg",
    },
  ],
  
  }
  ,{
  id: 6,
  title: "Micro-Mouse Firmware Design",
  description: "Firmware for a two-wheel micro-mouse robot designed for RoboFest 2023, implementing precise control, navigation, and alignment strategies.",
  longDescription: `This project involved designing and implementing firmware for a two-wheel micro-mouse robot for RoboFest-2023. 
  The firmware controls wheel speeds, navigation through a maze, and alignment using sensor feedback. 
  The project emphasizes real-time response, precision, and efficient navigation strategies using a combination of PD controllers, sensors, and wheel encoders.`,
  technologies: ["C++", "Microcontroller Programming", "IR Sensors", "Gyroscope", "Wheel Encoders", "Bluetooth"],
  features: [
    "Two-wheel differential drive control",
    "Real-time speed and alignment control",
    "Box-to-box navigation strategy",
    "Sensor-based alignment with IR and gyro",
    "Smooth acceleration using PD controllers",
    "Fast search-run and precise fast-run modes"
  ],
  challenges: [
    "Maintaining precise movement through the maze",
    "Reducing interference between IR sensors",
    "Implementing responsive real-time control",
    "Handling complex sensor data and timing",
    "Optimizing alignment and navigation accuracy"
  ],
  solutions: [
    "Used separate PD controllers for speed and alignment",
    "Implemented timing strategies to reduce sensor interference",
    "Optimized response cycles to 1 ms updates",
    "Utilized wheel encoders and gyroscope for precise alignment",
    "Developed navigation strategies for efficient maze traversal"
  ],
  image: "/images/microMouse/mouse.jpeg",
  githubLink: "https://github.com/sanjith1999/SINDiB-MicroMouse",
  liveLink: "https://medium.com/@shansanjithofficial/firmware-design-for-micro-mouse-c3c682946275",
  duration: "2 months",
  teamSize: "Team of 3",
  role: "Firmware Developer",
  sections: [
    {
      id: "hardware",
      heading: "Hardware Overview",
      content: ["The robot uses a two-wheel differential drive, four IR sensors, a gyroscope, wheel encoders, 9 LEDs, an OLED display, and a Bluetooth module for control and debugging."],
      image: "/images/micromouse_hardware.jpg",
    },
    {
      id: "controller",
      heading: "Controller Design",
      content: ["Separate PD controllers for speed and alignment were implemented to ensure smooth movements and accurate positioning during maze traversal."],
      image: "/images/micromouse_controller.jpg",
    },
    {
      id: "navigation",
      heading: "Navigation Strategy",
      content: ["The firmware implements a box-to-box navigation strategy, with precise turns at decision points and sensor-based alignment for efficient maze traversal."],
      image: "/images/micromouse_navigation.jpg",
    },
    {
      id: "challenges",
      heading: "Challenges & Solutions",
      content: ["Key challenges included sensor interference, precise timing, and real-time response. Solutions involved optimized update cycles, careful sensor timing, and PD controller tuning."],
      image: "/images/micromouse_challenges.jpg",
    },
  ]
},
{
  id: 7,
  title: "PID Control in Mobile Robot",
  description: "An implementation of PID (Proportional‑Integral‑Derivative) control for a mobile robot to achieve stable trajectory following and speed regulation.",
  longDescription: `
    This project explores the design and implementation of a PID controller for a mobile robot platform.
    The objective was to enable smooth and accurate motion control—specifically, speed and position regulation—using feedback from sensors and tuning of PID gains.
    
    The robot uses differential drive wheels, encoders for odometry, and the controller adjusts motor commands to minimize error between set‑point and actual motion.
    Key goals included reducing overshoot, improving settling time, and ensuring robust performance in varying conditions.
  `,
  technologies: ["C/C++", "Microcontroller Programming", "Wheel Encoders", "PID Control Algorithm", "Differential Drive Robot"],
  features: [
    "Closed‑loop speed and position regulation",
    "Dual wheel differential drive architecture",
    "Encoder‑based odometry feedback",
    "Tuning of PID gains (P, I, D) to optimize response",
    "Reduced overshoot and faster settling time",
    "Real‑time embedded control implementation"
  ],
  challenges: [
    "Tuning PID gains for different motion modes",
    "Dealing with drift and noise in encoder feedback",
    "Achieving stable control with minimal overshoot",
    "Handling robot dynamics and non‑idealities (wheel slip, unequal wheel radii)",
    "Ensuring real‑time responsiveness on embedded hardware"
  ],
  solutions: [
    "Performed iterative gain tuning using response experiments",
    "Implemented encoder calibration for improved odometry accuracy",
    "Limited integral term to prevent wind‑up and overshoot",
    "Used differential drive kinematics model to compensate wheel mismatch",
    "Optimized control loop timing for consistent real‑time performance"
  ],
  image: "/images/pid/pid.jpeg",
  githubLink: "https://github.com/username/pid‑mobile‑robot",
  liveLink: "https://weirdspex.blogspot.com/2022/10/pid-control-in-mobile-robot.html",
  duration: "4 weeks",
  teamSize: "Solo project",
  role: "Embedded Systems & Control Engineer",
  sections: [
    {
      id: "overview",
      heading: "Overview",
      content:
        ["This section provides a high‑level view of the project: the motivation, objectives, and the mobile robot platform used.",],
      image: "/images/pid_mobile_robot_overview.jpg",
    },
    {
      id: "implementation",
      heading: "Implementation Details",
      content:
       [ "Describes how the PID controller was implemented on the microcontroller, integration of encoders, and motor control logic.",],
      image: "/images/pid_mobile_robot_implementation.jpg",
    },
    {
      id: "tuning",
      heading: "PID Gain Tuning",
      content:
        ["Covers the process of tuning the P, I, and D parameters, analysis of response curves, and how settling time and overshoot were improved.",],
      image: "/images/pid_mobile_robot_tuning.jpg",
    },
    {
      id: "results",
      heading: "Results & Observations",
      content:[
        "Shows the outcome of control experiments: actual vs. set‑point performance, measured reduction in error, and robustness to disturbances.",],
      image: "/images/pid_mobile_robot_results.jpg",
    },
        {
      id: "Long paragraphs",
      heading: "Results & Observations",
      content: [
  "This social media analytics platform helps businesses and creators understand their social media performance.",
  "It provides detailed insights into engagement rates, follower growth, content performance, and audience demographics.",
  "Advanced features include sentiment analysis, hashtag tracking, and predictive analytics for optimal posting times."
],
      image: "/images/pid_mobile_robot_results.jpg",
    }
  ]
}


];

export const getProjectById = (id: string) => {
  return projectsData.find(project => project.id === parseInt(id));
}; 

