import realLanding from "../../assets/real-landing.png";

export const content = {
  es: {
    nav: {
      skills: "Tecnologías",
      projects: "Proyectos",
      education: "Educación",
    },
    hero: {
      me: "Soy",
      name: "Lautaro Hitta",
      role: "Desarrollador Backend",
      description:
        "Soy un desarrollador enfocado en backend, especializado en Java y Spring Boot. Construyo aplicaciones fullstack para entregar productos completos, pero mi fuerte e interés está en la arquitectura backend y APIs.",
    },
    technologies: {
      title: "Tecnologías",
      subtitle:
        "Herramientas y lenguajes que uso para desarrollar software robusto.",
    },
    projects: {
      title: "Proyectos",
      subtitle:
        "Proyectos desarrollados para resolver problemas y demostrar mis habilidades técnicas.",
      items: [
        {
          title: "'Real.' - Habit Tracker",
          description:
            "Una aplicación full-stack para la gestión de hábitos, que incluye autenticación de usuarios, verificación por correo electrónico, organización de habitos arrastrables, almacenamiento en caché de solicitudes, y gestión de hábitos en tiempo real.",
          tech: [
            "Java",
            "Spring Boot",
            "Spring JPA",
            "Spring Security",
            "JWT",
            "OAuth",
            "PostgreSQL",
            "React",
            "Docker",
            "TailwindCSS",
            "Java Mail Sender",
          ],
          github: "https://github.com/hittaLautaro/REAL-habit-tracker",
          demo: "https://real-habits.netlify.app/",
          image: realLanding,
        },
      ],
    },
    education: {
      title: "Educación",
      items: [
        {
          degree: "Analista de Sistemas",
          school: "ORT Universidad",
          year: "2023 - Actualidad",
          description:
            "Especialización en desarrollo de software y arquitectura de sistemas.",
        },
      ],
    },
    misc: {
      contact_modal: {
        title: "Email de Contacto",
        copy: "Copiar Email",
        copied: "Copiado",
      },
    },
  },
  en: {
    nav: {
      skills: "Skills",
      projects: "Projects",
      education: "Education",
    },
    hero: {
      me: "I'm",
      name: "Lautaro Hitta",
      role: "Backend Developer",
      description:
        "I'm a backend-focused developer using Java and Spring Boot. I build fullstack apps to deliver complete products, but my strength and interest are in backend architecture and APIs.",
    },
    technologies: {
      title: "Skills",
      subtitle: "Technologies and tools I use to build modern software.",
    },
    projects: {
      title: "Projects",
      subtitle:
        "Projects developed to solve problems and showcase my technical skills.",
      items: [
        {
          title: "'Real.' - Habit Tracker",
          description:
            "A full-stack habit tracker, it features user authentication, email verification, drag and drop organization, request caching, and real-time habit management.",
          tech: [
            "Java",
            "Spring Boot",
            "Spring JPA",
            "Spring Security",
            "JWT",
            "OAuth",
            "PostgreSQL",
            "React",
            "Docker",
            "TailwindCSS",
            "Java Mail Sender",
          ],
          github: "https://github.com/hittaLautaro/REAL-habit-tracker",
          demo: "https://real-habits.netlify.app/",
          image: realLanding,
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Technical degree in Computer Science",
          school: "ORT University",
          year: "2023 - Present",
          description:
            "Specialization in software development and systems architecture.",
        },
      ],
    },
    misc: {
      contact_modal: {
        title: "Contact Email",
        copy: "Copy Email",
        copied: "Copied",
      },
    },
  },
};

export default content;
