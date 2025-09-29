// src/data/about.js
import awsBadge from "../assets/certifications/aws-cloud-practitioner.png";
import azureBadge from "../assets/certifications/azure-fundamentals.png";
import googleBadge from "../assets/certifications/google-cloud.png";
import msAssociateBadge from "../assets/certifications/microsoft-certified-associate-badge.svg";
import msSecurityBadge from "../assets/certifications/microsoft-certified-Security-fundamentals-badge.svg";

import fullstackBadge from "../assets/courses/fullstackbadge.png";  
import java from "../assets/courses/java.svg";
import epamCert from "../assets/courses/epamCert.png";
import javaOracleCert from "../assets/courses/OracleCourseCertificate.png";
import aiBadge from "../assets/courses/AIforEveryone.png";
import googleCloudBadge from "../assets/courses/googleCloudBadge.png";
import genAIBadge from "../assets/courses/IntroductiontoGenerativeAI.png";
import gccfBadge from "../assets/courses/GoogleCloudComputingFoundations.png";

// Education
export const EDUCATION = [
  {
    degree: "B.Tech Computer Science",
    institution: "MLRITM",
    years: "2019 - 2023",
    details: "CGPA: 8.1/10",
  },
  {
    degree: "Class XII",
    institution: "Narayana Junior College",
    years: "2017 - 2019",
    details: "Science PCM • 92.0%",
  },
];

// Achievements
export const ACHIEVEMENTS = [
  "Honored to be recognized globally in TCS CodeVita Season 10, securing a global rank of 1209! 🏆 #TCSCodeVita #CodingChampion",
];


// Courses
export const COURSES = [
  {
    name: "Front-End Technologies",
    platform: "EPAM Systems – Center of Excellence",
    year: "2023",
    file: epamCert,
    badge: fullstackBadge,
  },
  {
    name: "Google Cloud Computing Foundations",
    platform: "Google Cloud",
    year: "2025",
    url: "https://partner.cloudskillsboost.google/public_profiles/43656f19-fd97-403c-80a1-4d8df1264739/badges/18040856",
    badge: gccfBadge,
  },
  {
    name: "Java Fundamentals",
    platform: "Oracle Academy",
    year: "2021",
    file: javaOracleCert, // Local certificate (PNG)
    badge: java,
  },
  {
    name: "AI for Everyone",
    platform: "deeplearning.ai (Coursera)",
    year: "2020",
    file: aiBadge,
    badge: aiBadge,
  },
  {
    name: "Introduction to Generative AI",
    platform: "Google Cloud / Cloud Skills Boost",
    year: "2025",
    url: "https://partner.cloudskillsboost.google/public_profiles/43656f19-fd97-403c-80a1-4d8df1264739/badges/18013564",
    badge: genAIBadge,
  },
  {
    name: "Google Cloud Essentials (7-Course Path)",
    platform: "Google Cloud Skills Boost",
    year: "2024–2025",
    url: "https://partner.cloudskillsboost.google/public_profiles/43656f19-fd97-403c-80a1-4d8df1264739",
    badge: googleCloudBadge,
  },
];


// Internships
export const INTERNSHIPS = [
  {
    company: "AuroPro Soft Systems",
    title: "Cloud Computing Intern",
    period: "Jan 2023 - June 2023",
    work: "Managed containerized applications using Docker and Kubernetes, set up CI/CD workflows, and supported deployment of services to AWS cloud.",
  },
  {
    company: "Virtusa",
    title: "Student Ambassador Intern",
    period: "Feb 2022 - March 2022",
    work: "Collaborated on technical workshops, supported software demos, and contributed to case study–based project work.",
  }
];


// Testimonials
export const TESTIMONIALS = [
  {
    quote: "Testimonials coming soon. Stay tuned!",
    author: "—",
  }
];


export const CERTIFICATIONS = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    url: "https://www.credly.com/badges/53dd247a-7b2b-421e-bdb7-f6e8d0f79626/linked_in?t=sjt3dh", // replace with real link
    badge: awsBadge,
  },
  {
    title: "Microsoft Certified: Associate",
    issuer: "Microsoft",
    year: "2023",
    url: "https://learn.microsoft.com/en-us/users/rahulkumarpaswan-5011/credentials/d492cb69cf6b4e68?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    badge: msAssociateBadge,
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    year: "2023",
    url: "https://learn.microsoft.com/en-us/users/rahulkumarpaswan-5011/credentials/61fe22706e92c52d?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    badge: azureBadge,
  },
  {
    title: "Google Cloud Certified",
    issuer: "Google",
    year: "2023",
    url: "https://www.credly.com/badges/b13eb2a6-5014-4591-a8b3-d506e3f99277/linked_in?t=sjjwwk",
    badge: googleBadge,
  },
  {
    title: "Microsoft Certified: Security Fundamentals",
    issuer: "Microsoft",
    year: "2023",
    url: "https://learn.microsoft.com/en-us/users/rahulkumarpaswan-5011/credentials/330682b4b8cde858?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    badge: msSecurityBadge,
  },
];
