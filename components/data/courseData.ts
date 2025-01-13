// components/data/courseData.ts

export interface Course {
  title: string;
  description: string;
  link: string;
  image: string;
  startDate: string;
  duration: string;
}

export const courses: Course[] = [
  {
    title: "Advanced Containerization in Docker",
    description:
      "Master Docker and learn how to build, deploy, and manage secure and scalable containerized systems.",
    link: "/academy/docker",
    image: "/courseimages/docker.png",
    startDate: "TBD",
    duration: "8 weeks",
  },
  {
    title: "Advanced Orchestration with Kubernetes",
    description:
      "Deepen your skills in managing and optimizing containerized applications using Kubernetes.",
    link: "/academy/kubernetes",
    image: "/courseimages/kubernetes.png",
    startDate: "TBD",
    duration: "8 weeks",
  },
  {
    title: "Component-Based Web Development with React",
    description:
      "Learn to build scalable and reusable components for modern web applications with React.",
    link: "/academy/react",
    image: "/courseimages/react.png",
    startDate: "TBD",
    duration: "8 weeks",
  },
  {
    title: "Secure and Scalable Microservices with Spring Boot",
    description:
      "Build secure and scalable microservices using Spring Boot, Docker, and industry-standard security practices.",
    link: "/academy/springboot",
    image: "/courseimages/springboot.png",
    startDate: "TBD",
    duration: "8 weeks",
  },
  {
    title: "Scalable Cloud Services with AWS, Azure, and Google Cloud",
    description:
      "Master cloud computing with AWS, Azure, and Google Cloud. Learn to deploy and manage scalable cloud solutions.",
    link: "/academy/cloud",
    image: "/courseimages/clouddev.png",
    startDate: "TBD",
    duration: "8 weeks",
  },
];
