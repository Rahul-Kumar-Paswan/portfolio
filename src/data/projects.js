import cicdImg from "../assets/projects/cicd.png";
import cloudImg from "../assets/projects/cloud.png";
import portfolioImg from "../assets/projects/portfolio.png";
import monitoringImg from "../assets/projects/monitoring.png";
import chatopsImg from "../assets/projects/chatops.png";
import spotifyImg from "../assets/projects/spotifyImg.png";
import aws3tierImg from "../assets/projects/aws3tier.png"; // add image
import springbootImg from "../assets/projects/springboot.png"; // add image
import devopsDemoImg from "../assets/projects/devopsDemo.png"; // add image
import qrGeneratorImg from "../assets/projects/qrGenerator.png"; // add image

const projects = [
  {
    title: "CI/CD Pipeline Automation",
    description:
      "Built a basic CI/CD pipeline using GitHub Actions and Docker to automate builds, tests, and container deployments. This helped me understand real-world DevOps flows.",
    tech: ["GitHub Actions", "Docker", "Kubernetes"],
    github: "https://github.com/your-username/cicd-pipeline",
    Demo: "https://your-demo-link.com",
    image: cicdImg, // now imported
  },
  {
    title: "Cloud Cost Optimizer",
    description:
      "Developed a tool to analyze and reduce AWS costs by automating unused resource detection and scheduling.",
    tech: ["AWS", "Terraform", "Node.js"],
    github: "https://github.com/your-username/cloud-cost-optimizer",
    image: cloudImg,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Tailwind, and animated background. Fully responsive and SEO optimized.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Rahul-Kumar-Paswan/portfolio",
    Demo: "https://rahulverse.com",
    image: portfolioImg,
  },
  {
    title: "Monitoring Dashboard",
    description:
      "Built a real-time monitoring dashboard for servers and apps with Prometheus + Grafana.",
    tech: ["Prometheus", "Grafana", "Node.js"],
    image: monitoringImg,
  },
  {
    title: "ChatOps Bot",
    description:
      "Created a Slack bot for automated deployments, monitoring alerts, and team notifications.",
    tech: ["Slack API", "Node.js", "Docker"],
    image: chatopsImg,
  },
  {
    title: "Terraform Spotify Playlist Automation",
    description:
      "Automated Spotify playlist creation using Terraform, Dockerized OAuth proxy, and the Spotify API. Demonstrates Infrastructure as Code (IaC) and DevOps practices for SaaS automation.",
    tech: ["Terraform", "Spotify API", "Docker", "OAuth 2.0"],
    github: "https://github.com/Rahul-Kumar-Paswan/Spotify_Playlist",
    Demo: "https://open.spotify.com/playlist/0lDC34DkhnX5HGlnV3ZCUB",
    image: spotifyImg,
  },
  // New projects added below:
  {
    title: "AWS 3-Tier RDS Beanstalk App",
    description:
      "Full-stack 3-tier React + Node.js app deployed on AWS Elastic Beanstalk with MySQL RDS and Docker.",
    tech: ["AWS Elastic Beanstalk", "Amazon RDS", "React", "Node.js", "Docker", "MySQL"],
    github: "https://github.com/Rahul-Kumar-Paswan/aws-3tier-rds-beanstalk-app",
    image: aws3tierImg,
  },
  {
    title: "SpringBoot Fullstack UserPortal",
    description:
      "Full-stack user management app built with Spring Boot, Thymeleaf, and MySQL. Includes CI/CD automation with Jenkins, containerization with Docker, and deployment on Kubernetes (EKS). Integrated security scanning and monitoring.",
    tech: ["Spring Boot", "Thymeleaf", "MySQL", "Jenkins", "Docker", "Kubernetes (EKS)", "Security Scanning", "Monitoring"],
    github: "https://github.com/Rahul-Kumar-Paswan/SpringBoot-Fullstack-UserPortal/tree/kubernetes",
    image: springbootImg,
  },
  {
    title: "3-Tier DevOps Project",
    description:
      "Replicates a real-world enterprise deployment pipeline for a user management system with authentication, role-based access, containerization, CI/CD, and Kubernetes deployment.",
    tech: ["Docker", "Kubernetes", "CI/CD", "Authentication", "Role-based Access", "Jenkins", "AWS EKS"],
    github: "https://github.com/Rahul-Kumar-Paswan/3-Tier-DevOps-Project-Demo/tree/kubernetes",
    image: devopsDemoImg,
  },
  {
    title: "DevOps QR Generator",
    description:
      "A full-stack DevOps project that generates QR codes for any URL, showcasing containerization, CI/CD, Kubernetes orchestration, AWS integration, and secret management.",
    tech: ["Docker", "Kubernetes", "CI/CD", "AWS EC2", "Secret Management", "QR Code Generation"],
    github: "https://github.com/Rahul-Kumar-Paswan/DevOps-QR-Generator",
    image: qrGeneratorImg,
  },
];

export default projects;
