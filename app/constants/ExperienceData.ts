// data/experienceData.ts or inside your component
import { Experience } from "../types/experience"
import { ProjectCardProps } from "../types/experience"
export const EducationData : Experience[] = 
[
  {
    role: "Master of Science in Computational Science and Engineer",
    companyLogo:"/images/McMaster-logo.png",
    period:"2023 - 2025",
    description: [
      "Dissertation: Mixed-Precision GMRES-Based Iterative Refinement Sparse Linear Solver with QDLDL"
    ]
  },

    {
    role: "Bachelor of Science in Physics (minor in Mathematics and Humanities)",
    companyLogo:"/images/Hong_Kong_University_of_Science_and_Technology-Logo.svg",
    period:"2016 - 2021",
    description: [
      "Dissertation: Markov Chain Monte Carlo Simulation on Ising Model"
    ]
  },
]
export const experienceData : Experience[] = [
    {
      role: "Machine Learning Intern",
      companyLogo: "/images/Hong_Kong_Observatory_Logo_(2018).svg.png",
      period: "2020 - 2021",
      description: [
        "Processed millions of real-time flight records with Pandas and built an XGBoost fuel prediction model in Python, achieving 90% accuracy and improving fuel forecast efficiency.",
        "Developed a C++ flight path optimization algorithm using meteorological data, reducing estimated fuel costs by up to 15% for potential integration into flight management systems."
      ]
    },
    {
      role: "Full Stack Developer",
      companyLogo: "/images/rare_elements.png",
      period: "2021",
      description: [
        "Built and maintained a fintech full-stack web app (React.js, Node.js, Azure) for 10+ enterprise clients and hundreds of users, enhancing transaction workflows and UX.",
        "Developed a BI pipeline analyzing millions of social media posts with sentiment analysis and Named Entity Recognition (NER) using Azure AI Language, improving event planning efficiency by 30%.",
        "Deployed a wildlife classification model on Azure, improving animal welfare response time by 40% through automated species detection."
      ]
    },
    {
      role: "STEM Teacher",
      companyLogo: "/images/tpklogo.jpg",
      period: "2022 - 2023",
      description: [
        "Led a school STEM team in robotics programming using Arduino kits, winning a school-wide robotics competition, demonstrating team and leadership skills.",
        "Taught STEM subjects (Physics, Science, and Computer Literacy), improving student performance, with over 90% of the class achieving a passing grade in university entrance exams."
      ]
    }
  ];

export const projectData: ProjectCardProps[] = [
  {
    title: "AI Essay Scoring System ",
    description:
      "An AI essay scoring system by integrating large language model outputs (OpenAI API) with Random Forest, achieving a 10% quadratic weighted kappa (QWK) boost over standalone LLM-based scoring.\n",
    technologies:
    ["OpenAI API", "Python", "Scikit-learn", "Pandas", "seaborn", "lexical-diversity" ,"nltk"]
  ,    pageUrl: "https://github.com/gordonwky/AI_Essay_Scoring",
  source: "GitHub",
  imageUrl :"258-2587139_image-result-for-amazon-redshift-documentation-gitlab-logo.png"

  
  },
  {
    title: "Medical Chatbot with RAG",
    description:
      "An AI-powered chatbot leveraging OpenAI API and RAG to improve response relevance and accuracy. Integrated continuous integration and deployment (CI/CD) pipelines using GitLab for automated updates.\n"
  , technologies:
  ["LangChain", "GitLab CI/CD", "Python", "FAISS", "streamlit"],
    pageUrl: "https://gitlab.cas.mcmaster.ca/wongk124/medical_chatbot",
  source: "GitLab",
  imageUrl: "/images/github.png"


    },

  {
    title: "C++ Gaussian Mixture Model Library for ML",
    description:
      "A robust GMM library with over 95% clustering accuracy matching scikit-learn, and achieved a 10% improvement in execution speed on benchmark datasets.\n"
  , technologies: ["C++", "GoogleTest", "Eigen", "CMake", "Git", "Apple Instrument"],
  pageUrl: "https://github.com/gordonwky/GMM_EM"
  ,
  source: "GitHub"

    },
  {
    title: "Video Style Transfer with CNN and CycleGAN",
    description:
      "A video style transfer tool using CNNs for segmentation and CycleGAN for style transfer in PyTorch."
  , technologies: ["Python", "PyTorch", "OpenCV", "NumPy", "Matplotlib"],
  pageUrl: "https://github.com/gordonwky/video-transfer",
  source: "GitHub"
  }
];
