import profile from "./profile.png";
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Sam Halligan",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
};
export const intro = {
  title: "Hey, I'm Sam",
  description:
    "A Full Stack Developer with 15 years of experince building APIs, websites, custom web crawlers, search tools and leading teams building SAAS products.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Download My Resume",
      link: "https://drive.google.com/uc?export=download&id=1f9zInrg_bZbTsQnq0DPB8dNJ4DUrf-ZG",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "I am a full stack developer with over 12 years of professional experience in the tech industry, and almost 20 years of programming experience. I've worked with many different tech stacks over the years - from building financial automation tools in Powershell (that was interesting) to Java + Spring web apps and Python + Django/Flask/FastAPI APIs.",
    "My career began after earning a Bachelor's degree in Computer Science from Dublin City University. Since then, I've worked at a range of startup companies in The Netherlands and remotely. Gaining experience at these startups has given me a broad range of exposure to different areas of both product development, software engineering and team management.",
    "I'm currently looking for new opportunities to work on exciting projects and help new companies and startups build their early MVPs and products. If you're looking for a full stack engineer with a proven track record of delivering high quality software, please get in touch!",
  ],
};

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Full Stack Development",
      description:
        "I build modern and interactive websites and webapps using Python + Django.",
      icons: null,
    },
    {
      title: "Backend/API Development",
      description:
        "I create scalable, maintainable and secure APIs using Python + Django, FastAPI or Flask.",
      icons: null,
    },
    {
      title: "Custom Web Crawlers",
      description:
        "I have 10 years of experience with building custom web crawlers using automated headless browsers and various scraping + proxy tools - anything is crawlable!",
      icons: null,
    },
    {
      title: "LLM integrations/Custom LLM tools",
      description:
        "I have developed multiple SAAS products using different LLMs and leveraging both comercial LLM APIs and fine tuning custom models.",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Experience",
  cards: [
    {
      title: "Moving Pixels",
      description:
        "Moving Pixels is my personal software development company. I work on a range of projects including APIs, websites and custom web crawlers. I also work with clients to build custom software solutions.",
      icons: [
        {
          icon: faExternalLinkSquareAlt,
          link: "https://www.samhalligan.com",
        },
      ],
    },
    {
      title: "Bryq",
      description:
        "Bryq is a leading talent intelligence solution based on soft skills. I worked on developing the Bryq App and API, building new features and integrations to external partners.",
      icons: [
        {
          icon: faExternalLinkSquareAlt,
          link: "https://www.bryq.com",
        },
      ],
    },
    {
      title: "ISVWorld",
      description:
        "ISVWorld is a large data platform of independent software vendors. I was the CTO of ISVWorld, leading a team of developers and data scientists to build and maintain the platform.",
      icons: [
        {
          icon: faExternalLinkSquareAlt,
          link: "https://www.isvworld.com",
        },
      ],
    },
    {
      title: "ISVPay",
      description:
        "ISVPay is a payment processor focused on ISVs - I was the founding CTO of ISVPay and led the development of the product from the ground up.",
      icons: [
        {
          icon: faExternalLinkSquareAlt,
          link: "https://www.isvpay.io",
        },
      ],
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Coffee Chat! Please do not hesitate to schedule a meeting on Calendly. Alternatively, feel free to reach out directly by email by clicking the button below!",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:sam@samhalligan.com",
      isPrimary: false,
    },
    {
      title: "Schedule a Meeting in my Calendly",
      link: "https://calendly.com/sam-jlis/30min",
      isPrimary: true,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title:
    "Sam Halligan | Full Stack Developer | Software Engineer | Python | Django developer | LLM | Web Crawler | API Developer",
  description:
    "I'm Sam Halligan, A Full Stack Developer experienced in building Webapps, APIs, SAAS products, custom web crawlers and search tools!",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@YYZ",
  description:
    "Sam Halligan | Full Stack Developer | Software Engineer | Python | Django developer | LLM | Web Crawler | API Developer",
  cards: [
    {
      title: "My GitHub",
      link: "https://github.com/YYZ/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/samhalligan/",
    },
  ],
};

