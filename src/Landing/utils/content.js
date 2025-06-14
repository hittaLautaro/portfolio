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
        "Herramientas y lenguajes que utilizo para desarrollar software.",
    },
    projects: {
      title: "Proyectos",
      subtitle:
        "Proyectos desarrollados para resolver problemas reales y demostrar habilidades técnicas.",
      items: [
        {
          title: "'Real.' - Habit Tracker",
          description:
            "Una aplicación full-stack para la gestión de hábitos, que incluye autenticación de usuarios, verificación por email, organización mediante arrastrar y soltar, almacenamiento en caché de solicitudes, programación de tareas y gestión de hábitos en tiempo real.",
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
          school: "Universidad ORT",
          year: "2023 - Actualidad",
          description:
            "Especialización en desarrollo de software y arquitectura de sistemas.",
        },
      ],
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
      subtitle: "Real-world applications I've developed professionally.",
      items: [
        {
          title: "'Real.' - Habit Tracker",
          description:
            "A full-stack habit tracker, it features user authentication, email verification, drag and drop organization, request caching, scheduling, and real-time habit management.",
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
          degree: "Pre-degree in Computer Science",
          school: "ORT University",
          year: "2023 - Present",
          description:
            "Specialization in software development and systems architecture.",
        },
      ],
    },
  },
};

export default content;
