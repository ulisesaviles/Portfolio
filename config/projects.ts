// Types
import { Project } from "../types/projects";

// Assets
import me from "../public/assets/people/me.jpeg";
import tendrishImages from "../public/assets/projects/tendrishDashboard/index";

// Actual projects
export const tendrishDashboard: Project = {
  id: "tendrishDashboard",
  title: "Tendrish dashobard",
  category: "Large free-lance project",
  cover: tendrishImages.cover,
  description: {
    short:
      "The Tendrish dashboard is a web-app made with ReactJS and a Firebase backend that lets Tendrish's nutritionists create and edit recipes, check their agenda and much more.",
    large:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie  orci, eget condimentum nisi consequat vitae.\nDonec lectus felis, varius quis bibendum eu, convallis nec eros. Nam ultricies interdum laoreet. Integer non est sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ut viverra sem. Mauris in tortor sit amet purus tristique accumsan.\nSuspendisse ac diam velit. Suspendisse tellus velit, cursus id mi at, commodo semper ante.",
  },
  developmentProcess: {
    technologies: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      technologies: [
        "ReactJS",
        "TypeScript",
        "Github",
        "Cloud functions",
        "Firestore",
        "NodeJS",
      ],
    },
    timeLine: {
      weeks: 25,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
    },
    team: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      members: [
        {
          img: me,
          name: "Me",
        },
      ],
    },
    deployment: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      link: "https://admin.tendrishmealplan.com/",
      qr: me,
    },
  },
  type: "web-app",
  features: [
    {
      title: "APP USER'S STATS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: tendrishImages.features.stats,
    },
    {
      title: "CREATE RECIPES",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: tendrishImages.features.createRecipe,
    },
    {
      title: "CHECK THE ADMIN'S AGENDA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: tendrishImages.features.agenda,
    },
    {
      title: "VIEW EXISTING RECIPES",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: tendrishImages.features.recipeFinder,
    },
    {
      title: "EDIT USER'S MEAL PLANS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: tendrishImages.features.userFinder,
    },
    {
      title: "CHECK THE ADMIN'S AGENDA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: tendrishImages.features.agenda,
    },
  ],
};

// All projects
export const allProjects: Project[] = [
  tendrishDashboard,
  // tendrishDashboard,
  // tendrishDashboard,
  // tendrishDashboard,
  // tendrishDashboard,
  // tendrishDashboard,
  // tendrishDashboard,
];
