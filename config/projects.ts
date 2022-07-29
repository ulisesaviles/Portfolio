// Types
import { Project } from "../types/projects";

// Assets
import me from "../public/assets/people/me.jpeg";
import acner from "../public/assets/people/acner.jpg";
import tendrishImages from "../public/assets/projects/tendrishDashboard/index";
import goFishImages from "../public/assets/projects/goFish/index";
import wordSearchImages from "../public/assets/projects/wordSearch/index";
import blackJackImages from "../public/assets/projects/blackjack/index";
import chomskyImages from "../public/assets/projects/chomsky/index";
import turfImages from "../public/assets/projects/turfmasters/index";
import stimbImages from "../public/assets/projects/stimb/index";
import regressionImages from "../public/assets/projects/regression/index";
import investImages from "../public/assets/projects/investNGrow/index";
import tendrishAppImages from "../public/assets/projects/tendrishApp/index";
import poleoImages from "../public/assets/projects/poleo/index";
import chatImages from "../public/assets/projects/liveChatApp/index";

// Actual projects
// Big
export const tendrishDashboard: Project = {
  id: "tendrishDashboard",
  title: "Tendrish dashobard",
  category: "Large free-lance project",
  cover: tendrishImages.cover,
  size: "large",
  description: {
    short:
      "The Tendrish Dashboard is a nutritionist's platform in which they can upload, edit, hide or delete recipes to the app, as well edit their user's meal plan, check stats, etc.",
    large:
      "Tendrish is a multi-app echosystem, in which users use a mobile app and nutritionists use this dashboard. This project allow nutritionists to check the stats of the overall app performance, add other nutritionists as users (and edit their schedule, and check their performance), check their own agendas (for appointments schedules via the mobile app), create and view ingredients that will be used in recipes, create, edit, view, hide and delete recipes, view and edit user's meal plans, create app events, create app ads and many more features.",
  },
  developmentProcess: {
    technologies: {
      description:
        "This web-app's front-end was made with ReactJS using JavaScript (I'm currently migrating it to TypeScript) and controlling versions with github. The backend stores the data in Firebase Firestore, stores the files in firebase storage and the logic is an API made with Firebase Cloud Functions in a NodeJS environment.",
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
        "Tendrish was finished in around 25 weeks (counting designing and prototyping), however, this timeline includes the developement of the user's mobile app because it was develped in paralell.",
    },
    team: {
      description: "I developed this project on my own.",
      members: [
        {
          img: me,
          name: "Me",
        },
      ],
    },
    deployment: {
      description:
        "This project was deployed using Github pages, since all the backend logic is safely managed in an API. This dashboard's use is meant only for Tendrish's nutritionists, therefore it is not publically available.",
      // link: "https://admin.tendrishmealplan.com/",
      // qr: tendrishImages.qr,
    },
  },
  type: "web-app",
  features: [
    {
      title: "APP'S PERFORMANCE'S STATS",
      description:
        "Since Tendrish is a real product, they need access to key data to meassure the performance of the app and its use among users.",
      img: { src: tendrishImages.features.stats, type: "desktop" },
    },
    {
      title: "CREATE INGREDIENTS",
      description:
        "Tendrish's major goal is to provide users with a meal plan, which is conformed by recipes that use ingredients. Those ingredients are created in this page. They cannot be just plain text because the app uses their nutritional value, the seassons in which they are available, their category, aditional information and needs to be able to sum them in a grocery list.",
      img: { src: tendrishImages.features.ingredients, type: "desktop" },
    },
    {
      title: "CREATE RECIPES",
      description:
        "Once the ingredients were uploaded, nutritionists are ready to create recipes. They enter general information about the recipe, then add the preparation process, and finally optional data like notes and hashtags.",
      img: { src: tendrishImages.features.createRecipe, type: "desktop" },
    },
    {
      title: "VIEW EXISTING RECIPES",
      description:
        "Once recipes were created, Nutritionists can view them to check their data as it will be displayed in the app. They also can hide it from the app's users, make it available from non-premium users, edit and delete it.",
      img: { src: tendrishImages.features.recipeFinder, type: "desktop" },
    },
    {
      title: "Manage admin profiles",
      description:
        "To be able to access this dashboard, you need an admin profile, which can only be created by an admin with permissions to do it. In this page, admins with permisions can view all admin's non-private data and edit it (like their zoom call link, their referral code, their schedule for appointments, etc), as well as measure their performance.",
      img: { src: tendrishImages.features.profiles, type: "desktop" },
    },
    {
      title: "CHECK THE ADMIN'S AGENDA",
      description:
        "In the mobile app, users can make appointments with nutritionists, which consists of a video call were nutritionists gather more information about the user to personalize their meal plan according to their specific needs. In this page, nutritionists can check their agendas to look if they have appointments scheduled.",
      img: { src: tendrishImages.features.agenda, type: "desktop" },
    },
    {
      title: "EDIT USER'S MEAL PLANS",
      description:
        "Once the appoint finishes, nutritionists can edit the user's meal plan to personalize it according to their needs. This page allows them to do that, as well as enter notes about their appointment and change other user's settings like the servings the should eat of each recipe.",
      img: { src: tendrishImages.features.userFinder, type: "desktop" },
    },
    {
      title: "Dark mode",
      description:
        "Working on the night? No problem! Just use the dark mode to work more comfortably (or if you just prefer to use it).",
      img: { src: tendrishImages.features.darkMode, type: "desktop" },
    },
  ],
};

export const tendrishApp: Project = {
  id: "tendrishApp",
  title: "Tendrish app",
  category: "Large free-lance project",
  cover: tendrishAppImages.cover,
  size: "large",
  description: {
    short:
      "Tendrish is an app where users have a meal plan with in-house recipes desined by nutritionists. The meal plan can be customizes by users. Recipe's ingredients are added to a grocery list.",
    large:
      "Tendrish is a multi-app echosystem, in which nutritionists use a dashboard and users use this app. This project allows users to have a fully customizable meal plan, which means that users can modify any recipe in their meal plan according to their needs. All recipes include its nutritional information. All recipe's ingredients are automatically added to a grocery list. Users can search for recipes in a simple seach by name, or a complex search, which searches by ingredients to include, exclude, tags and name. Users are able to schedule appointments with nutritionists via the app. Users can create family plans to allow their relatives to look at and edit their meal plan. And much more features!",
  },
  developmentProcess: {
    technologies: {
      description:
        "This app's front-end was fully developed using react native with expo-cli and EAS. It was programmed in JavaScript, but later I migrated it to TypeScript to improve scalability. The backend stores the data in Firebase Firestore, stores the files in firebase storage and the logic is an API made with Firebase Cloud Functions in a NodeJS environment.",
      technologies: [
        "React native",
        "Expo",
        "TypeScript",
        "Github",
        "Cloud functions",
        "Firestore",
      ],
    },
    timeLine: {
      weeks: 25,
      description:
        "Tendrish was finished in around 25 weeks (counting designing and prototyping), however, this timeline includes the developement of the nutritionist's dashboard because it was develped in paralell.",
    },
    team: {
      description: "I developed this project on my own.",
      members: [
        {
          img: me,
          name: "Me",
        },
      ],
    },
    deployment: {
      description:
        "This app is available for download in Apple's App Store and Google's Play Store.",
      link: "https://apps.apple.com/ph/app/tendrish/id1602580443?platform=iphone",
      qr: tendrishAppImages.qr,
    },
  },
  type: "mobile-app",
  features: [
    {
      title: "home screen",
      description:
        'Tendrish home screen works as a "discover" page, where users are shown random seassonal recipes that can be added to their meal plan (if their meal plan is vegetarian, then the homescreen only displays vegetarian recipes).',
      img: { src: tendrishAppImages.features.home, type: "phone" },
    },
    {
      title: "Simple search",
      description:
        "If users click the search button in the home's header, they will navigate to this screen. In a simple search, users can search recipes by name.",
      img: { src: tendrishAppImages.features.simpleSearch, type: "phone" },
    },
    {
      title: "More Search filters",
      description:
        'With more search filters users can select tags, ingredients to include and ingredients to exclude. For example, if you want to cook something baked that uses apple but you hate bananas, you can select the "baked" tag, include apple and exclude banana in your complex search!',
      img: { src: tendrishAppImages.features.complexSearch, type: "phone" },
    },
    {
      title: "recipe",
      description:
        "Once users press in any recipe in any part of the app, they will navigate to this screen. Here, users can read the recipes ingredient's, instructions, like it, dislike it, and much more!",
      img: { src: tendrishAppImages.features.recipe, type: "phone" },
    },
    {
      title: "Nutritional values",
      description:
        "Not sure how healthy a recipe is? not problem! You can view any recipe's nutritional information.",
      img: { src: tendrishAppImages.features.nutriValues, type: "phone" },
    },
    {
      title: "Meal plan",
      description:
        "The app's most important screen. Here, users can look at their meal plan in any date! Press a recipe to look at it, press options to remove or change it, or click an empty space to add a recipe!",
      img: { src: tendrishAppImages.features.mealPlan, type: "phone" },
    },
    {
      title: "Change/add recipes",
      description:
        "Didn't like a recipe in the meal plan? Change it! Once you choose to change or add a recipe, you will navigate to this screen, where you will only find recipes that can be exchanged by the one you didn't like, that means, for example, that you cannot have a snack recipe as a breakfast. You can also make ",
      img: { src: tendrishAppImages.features.changeRecipes, type: "phone" },
    },
    {
      title: "Grocery list",
      description:
        "Once your meal plan is ready, all the ingredients in a date range will be added to a grocery list, to make it eassier for you to buy them!",
      img: { src: tendrishAppImages.features.grocery, type: "phone" },
    },
    {
      title: "More",
      description:
        "Tought that was all? There's much more to Tendrish! In this screen, users can select more specific functions and screens.",
      img: { src: tendrishAppImages.features.more, type: "phone" },
    },
    {
      title: "Profile",
      description:
        "Tendrish users can personalize their profile adding their information. This data is only shown between members of a family plan and to Tendrish nutritionists in the dashboard.",
      img: { src: tendrishAppImages.features.profile, type: "phone" },
    },
    {
      title: "Schedule appointment",
      description:
        "In this screen, premium users can schedule an appointment with a Tendrish nutritionist. In the appointment, the nutritionist will ask questions to customize the user's meal plan according to their specific needs.",
      img: { src: tendrishAppImages.features.scheduleAppo, type: "phone" },
    },
    {
      title: "Liked recipes",
      description:
        "Everyone has their favourite recipes. In this screen, users can access their liked recipes to add them to their meal plan easily!",
      img: { src: tendrishAppImages.features.likedRecipes, type: "phone" },
    },
    {
      title: "Ingredient exchanges",
      description:
        "Are you having problems to find an ingredient, or don't like it at all? This screen displays the ingredient's equivalence to other ingredients of the same category. This allow users to have the same nutritional value in their meal plan, but with different ingredients.",
      img: { src: tendrishAppImages.features.exchanges, type: "phone" },
    },
    {
      title: "Familiar plan",
      description:
        "Sometimes, cooking is a team work. In Tendrish users can create a family plan, where all users in a family share the same meal plan and grocery list!",
      img: { src: tendrishAppImages.features.famPlan, type: "phone" },
    },
    {
      title: "Settings",
      description:
        "Everyone has specific needs! In this screen, users can customize their meal plan easily and fast. They can choose the type (vegetaria, without red meat, without sea-food, etc.), exclude ingredients, and many more settings. This screen also includes language and plan settings",
      img: { src: tendrishAppImages.features.settings, type: "phone" },
    },
    {
      title: "And much more!",
      description:
        "Tendrish is a big app. This features are the most prominent, but the app has many more screens, features and surprises for all it's users!",
      img: { src: tendrishAppImages.cover, type: "desktop" },
    },
  ],
};

export const liveChatApp: Project = {
  id: "liveChatApp",
  title: "Live chat app",
  category: "Large school project",
  cover: chatImages.cover,
  size: "large",
  description: {
    short:
      "The Tendrish Dashboard is a nutritionist's platform in which they can upload, edit, hide or delete recipes to the app, as well edit their user's meal plan, check stats, etc.",
    large:
      "Tendrish is a multi-app echosystem, in which users use a mobile app and nutritionists use this dashboard. This project allow nutritionists to check the stats of the overall app performance, add other nutritionists as users (and edit their schedule, and check their performance), check their own agendas (for appointments schedules via the mobile app), create and view ingredients that will be used in recipes, create, edit, view, hide and delete recipes, view and edit user's meal plans, create app events, create app ads and many more features.",
  },
  developmentProcess: {
    technologies: {
      description:
        "This web-app's front-end was made with ReactJS using JavaScript (I'm currently migrating it to TypeScript) and controlling versions with github. The backend stores the data in Firebase Firestore, stores the files in firebase storage and the logic is an API made with Firebase Cloud Functions in a NodeJS environment.",
      technologies: [
        "React native",
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
        "Tendrish was finished in around 25 weeks (counting designing and prototyping), however, this timeline includes the developement of the user's mobile app because it was develped in paralell.",
    },
    team: {
      description: "I developed this project on my own.",
      members: [
        {
          img: me,
          name: "Me",
        },
      ],
    },
    deployment: {
      description:
        "This project was deployed using Github pages, since all the backend logic is safely managed in an API. This dashboard's use is meant only for Tendrish's nutritionists, therefore it is not publically available.",
      // link: "https://admin.tendrishmealplan.com/",
      // qr: tendrishImages.qr,
    },
  },
  type: "mobile-app",
  features: [
    {
      title: "APP'S PERFORMANCE'S STATS",
      description:
        "Since Tendrish is a real product, they need access to key data to meassure the performance of the app and its use among users.",
      img: { src: investImages.features.home, type: "phone" },
    },
    {
      title: "CREATE INGREDIENTS",
      description:
        "Tendrish's major goal is to provide users with a meal plan, which is conformed by recipes that use ingredients. Those ingredients are created in this page. They cannot be just plain text because the app uses their nutritional value, the seassons in which they are available, their category, aditional information and needs to be able to sum them in a grocery list.",
      img: { src: investImages.features.store, type: "phone" },
    },
    {
      title: "CREATE RECIPES",
      description:
        "Once the ingredients were uploaded, nutritionists are ready to create recipes. They enter general information about the recipe, then add the preparation process, and finally optional data like notes and hashtags.",
      img: { src: investImages.features.property, type: "phone" },
    },
    {
      title: "VIEW EXISTING RECIPES",
      description:
        "Once recipes were created, Nutritionists can view them to check their data as it will be displayed in the app. They also can hide it from the app's users, make it available from non-premium users, edit and delete it.",
      img: { src: investImages.features.events, type: "phone" },
    },
    {
      title: "Manage admin profiles",
      description:
        "To be able to access this dashboard, you need an admin profile, which can only be created by an admin with permissions to do it. In this page, admins with permisions can view all admin's non-private data and edit it (like their zoom call link, their referral code, their schedule for appointments, etc), as well as measure their performance.",
      img: { src: investImages.features.light, type: "phone" },
    },
  ],
};

export const poleo: Project = {
  id: "poleo",
  title: "Poleo",
  category: "Large free-lance project",
  cover: poleoImages.cover,
  size: "large",
  description: {
    short:
      "The Tendrish Dashboard is a nutritionist's platform in which they can upload, edit, hide or delete recipes to the app, as well edit their user's meal plan, check stats, etc.",
    large:
      "Tendrish is a multi-app echosystem, in which users use a mobile app and nutritionists use this dashboard. This project allow nutritionists to check the stats of the overall app performance, add other nutritionists as users (and edit their schedule, and check their performance), check their own agendas (for appointments schedules via the mobile app), create and view ingredients that will be used in recipes, create, edit, view, hide and delete recipes, view and edit user's meal plans, create app events, create app ads and many more features.",
  },
  developmentProcess: {
    technologies: {
      description:
        "This web-app's front-end was made with ReactJS using JavaScript (I'm currently migrating it to TypeScript) and controlling versions with github. The backend stores the data in Firebase Firestore, stores the files in firebase storage and the logic is an API made with Firebase Cloud Functions in a NodeJS environment.",
      technologies: [
        "React native",
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
        "Tendrish was finished in around 25 weeks (counting designing and prototyping), however, this timeline includes the developement of the user's mobile app because it was develped in paralell.",
    },
    team: {
      description: "I developed this project on my own.",
      members: [
        {
          img: me,
          name: "Me",
        },
      ],
    },
    deployment: {
      description:
        "This project was deployed using Github pages, since all the backend logic is safely managed in an API. This dashboard's use is meant only for Tendrish's nutritionists, therefore it is not publically available.",
      // link: "https://admin.tendrishmealplan.com/",
      // qr: tendrishImages.qr,
    },
  },
  type: "mobile-app",
  features: [
    {
      title: "APP'S PERFORMANCE'S STATS",
      description:
        "Since Tendrish is a real product, they need access to key data to meassure the performance of the app and its use among users.",
      img: { src: investImages.features.home, type: "phone" },
    },
    {
      title: "CREATE INGREDIENTS",
      description:
        "Tendrish's major goal is to provide users with a meal plan, which is conformed by recipes that use ingredients. Those ingredients are created in this page. They cannot be just plain text because the app uses their nutritional value, the seassons in which they are available, their category, aditional information and needs to be able to sum them in a grocery list.",
      img: { src: investImages.features.store, type: "phone" },
    },
    {
      title: "CREATE RECIPES",
      description:
        "Once the ingredients were uploaded, nutritionists are ready to create recipes. They enter general information about the recipe, then add the preparation process, and finally optional data like notes and hashtags.",
      img: { src: investImages.features.property, type: "phone" },
    },
    {
      title: "VIEW EXISTING RECIPES",
      description:
        "Once recipes were created, Nutritionists can view them to check their data as it will be displayed in the app. They also can hide it from the app's users, make it available from non-premium users, edit and delete it.",
      img: { src: investImages.features.events, type: "phone" },
    },
    {
      title: "Manage admin profiles",
      description:
        "To be able to access this dashboard, you need an admin profile, which can only be created by an admin with permissions to do it. In this page, admins with permisions can view all admin's non-private data and edit it (like their zoom call link, their referral code, their schedule for appointments, etc), as well as measure their performance.",
      img: { src: investImages.features.light, type: "phone" },
    },
  ],
};

export const investNGrow: Project = {
  id: "investNGrow",
  title: "Invest N' Grow!",
  category: "Large school project",
  cover: investImages.cover,
  size: "large",
  description: {
    short:
      "The Tendrish Dashboard is a nutritionist's platform in which they can upload, edit, hide or delete recipes to the app, as well edit their user's meal plan, check stats, etc.",
    large:
      "Tendrish is a multi-app echosystem, in which users use a mobile app and nutritionists use this dashboard. This project allow nutritionists to check the stats of the overall app performance, add other nutritionists as users (and edit their schedule, and check their performance), check their own agendas (for appointments schedules via the mobile app), create and view ingredients that will be used in recipes, create, edit, view, hide and delete recipes, view and edit user's meal plans, create app events, create app ads and many more features.",
  },
  developmentProcess: {
    technologies: {
      description:
        "This web-app's front-end was made with ReactJS using JavaScript (I'm currently migrating it to TypeScript) and controlling versions with github. The backend stores the data in Firebase Firestore, stores the files in firebase storage and the logic is an API made with Firebase Cloud Functions in a NodeJS environment.",
      technologies: [
        "React native",
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
        "Tendrish was finished in around 25 weeks (counting designing and prototyping), however, this timeline includes the developement of the user's mobile app because it was develped in paralell.",
    },
    team: {
      description: "I developed this project on my own.",
      members: [
        {
          img: me,
          name: "Me",
        },
      ],
    },
    deployment: {
      description:
        "This project was deployed using Github pages, since all the backend logic is safely managed in an API. This dashboard's use is meant only for Tendrish's nutritionists, therefore it is not publically available.",
      // link: "https://admin.tendrishmealplan.com/",
      // qr: tendrishImages.qr,
    },
  },
  type: "mobile-app",
  features: [
    {
      title: "APP'S PERFORMANCE'S STATS",
      description:
        "Since Tendrish is a real product, they need access to key data to meassure the performance of the app and its use among users.",
      img: { src: investImages.features.home, type: "phone" },
    },
    {
      title: "CREATE INGREDIENTS",
      description:
        "Tendrish's major goal is to provide users with a meal plan, which is conformed by recipes that use ingredients. Those ingredients are created in this page. They cannot be just plain text because the app uses their nutritional value, the seassons in which they are available, their category, aditional information and needs to be able to sum them in a grocery list.",
      img: { src: investImages.features.store, type: "phone" },
    },
    {
      title: "CREATE RECIPES",
      description:
        "Once the ingredients were uploaded, nutritionists are ready to create recipes. They enter general information about the recipe, then add the preparation process, and finally optional data like notes and hashtags.",
      img: { src: investImages.features.property, type: "phone" },
    },
    {
      title: "VIEW EXISTING RECIPES",
      description:
        "Once recipes were created, Nutritionists can view them to check their data as it will be displayed in the app. They also can hide it from the app's users, make it available from non-premium users, edit and delete it.",
      img: { src: investImages.features.events, type: "phone" },
    },
    {
      title: "Manage admin profiles",
      description:
        "To be able to access this dashboard, you need an admin profile, which can only be created by an admin with permissions to do it. In this page, admins with permisions can view all admin's non-private data and edit it (like their zoom call link, their referral code, their schedule for appointments, etc), as well as measure their performance.",
      img: { src: investImages.features.light, type: "phone" },
    },
  ],
};

// Medium
export const turfmasters: Project = {
  id: "turfmasters",
  title: "Turfmasters website",
  category: "Medium-size free-lance project",
  cover: turfImages.cover,
  size: "medium",
  description: {
    short:
      "Turfmasters is a company that sells turf, synthetic grass and related products. Their website allows them to reach more clients and show them all their products and services in detail.",
    large:
      "Turfmasters is a very successfull company that sells and installs turf, synthetic grass and related products. They needed a website to allow potential clients know their brand, products, the advantages of working with them and all the cases in where they delivered excellent results to their clients. Currently the website is fully developed, but the images have not beet provided by turfmasters yet.",
  },
  developmentProcess: {
    technologies: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      technologies: ["ReactJS", "Github", "JavaScript", "Adobe Xd"],
    },
    timeLine: {
      weeks: 2,
      description: "This project was desined and developed in two weeks.",
    },
    team: {
      description: "I developed this project in my own.",
      members: [
        {
          img: me,
          name: "Me",
        },
      ],
    },
    deployment: {
      description:
        "This project is hosted in github pages, and is currently available at the automatic github's domain, since it has not been officially deployed.",
      link: "https://ulisesaviles.github.io/TurfMasters/",
      qr: turfImages.qr,
    },
  },
  type: "static web site",
  features: [
    {
      title: "Home screen",
      description:
        "Turfmasters is a great company to work with, who's products are certified by FIFA, and that has worked for great projects. Their home page summarizes all that!",
      img: { src: turfImages.features.home, type: "desktop" },
    },
    {
      title: "Product catalog",
      description:
        "Turfmasters has lots of different products! (much more than I thought, at least). The product catalouge allows them to showcase all of them in a simple grid where clients can view their photo, description and recommendation. If clients whant to, they can click on the respective details button.",
      img: { src: turfImages.features.catalouge, type: "desktop" },
    },
    {
      title: "Product's details",
      description:
        "Did you liked a product? Then find out if that's the one perfect for you! Once users click on the details button they are shonw this page, where they can find all of the details espacifications and photos.",
      img: { src: turfImages.features.product, type: "desktop" },
    },
    {
      title: "Installation services",
      description:
        "Don't worry about the installation, just choose the product you want and turfmasters will take care of the rest.",
      img: { src: turfImages.features.installation, type: "desktop" },
    },
    {
      title: "Clients",
      description:
        "Not sure about the company's performance? Check out this page! Here users can find lots of great projects where turfmasters did a great job!",
      img: { src: turfImages.features.clients, type: "desktop" },
    },
    {
      title: "About us",
      description:
        "Want to know more about the compay? In this page turfmasters share who they are, as well as their mission and distinctive characteristics.",
      img: { src: turfImages.features.about, type: "desktop" },
    },
    {
      title: "Contact form",
      description:
        "This page allows users to contact turfmasters via phone, email or directly via an email form in this page.",
      img: { src: turfImages.features.contact, type: "desktop" },
    },
    {
      title: "Responsiveness",
      description:
        "As stated, Turfmasters wanted to reach more clients, that's why it was important to allow anyone to check your site at any time, in any device.",
      img: { src: turfImages.features.responsiveness, type: "phone" },
    },
  ],
};

export const stimb: Project = {
  id: "stimb",
  title: "STIMB's website",
  category: "Medium-size free-lance project",
  cover: stimbImages.cover,
  size: "medium",
  description: {
    short:
      "STIMB is a company that focuses in improving the efficiency of block machines. This website allows them to reach more clients and let them know the advantages of working with them.",
    large:
      "STIMB is a very succesfull company whose mission is to improve the efficiency of block machines. They achive this through various services, they restore, maintain, buy and sell block machines and their spare parts, as well as many other services specific to the client's needs. Currently the website is fully developed, but the images have not beet provided by STIMB yet.",
  },
  developmentProcess: {
    technologies: {
      description:
        "This project was developed in Next.js, a react framework delivers better SEO performance. It was designed in AdobeXD, programmed in JavaScript, hosted in Vercel and the code is stored in a github repository.",
      technologies: [
        "ReactJS",
        "Github",
        "Next.js",
        "Vercel",
        "JavaScript",
        "Adobe Xd",
      ],
    },
    timeLine: {
      weeks: 2,
      description: "This project was desined and developed in two weeks.",
    },
    team: {
      description: "I developed this project in my own.",
      members: [
        {
          img: me,
          name: "Me",
        },
      ],
    },
    deployment: {
      description:
        "This project is hosted in Vercel, and is currently available at the automatic vercel's domain, since it has not been officially deployed.",
      link: "https://stimb.vercel.app/",
      qr: stimbImages.qr,
    },
  },
  type: "static web site",
  features: [
    {
      title: "Home screen",
      description:
        "STIMB is a company with more than 30 years of experience improving the efficiency of block machines. That experience has allowed them to deliver best-in-class service. Their home page tells users just that.",
      img: { src: stimbImages.features.home, type: "desktop" },
    },
    {
      title: "Services",
      description:
        "As stated, STIMB delivers a lot of services depending on the client's specific needs, but the two most important for them are machine restoration and purchase and sell of machines and spare parts. This page describes both services with great detail, and suggests users to get in touch in case they need something else.",
      img: { src: stimbImages.features.services, type: "desktop" },
    },
    {
      title: "Products",
      description:
        "This pages allows users to see all of STIMB's products as a simple grid, where they can see a photo and general details about the product. They can click the details button in case they are interested.",
      img: { src: stimbImages.features.products, type: "desktop" },
    },
    {
      title: "Product's details",
      description:
        "Did you liked a product? Then find out if that's the one perfect for you! Once users click on the details button they are shonw this page, where they can find all of the details espacifications and photos.",
      img: { src: stimbImages.features.product, type: "desktop" },
    },
    {
      title: "Galery",
      description:
        "Not sure about the company's performance? Check out this page! Here users can find lots of great projects where STIMB did a great job!",
      img: { src: stimbImages.features.galery, type: "desktop" },
    },
    {
      title: "About us",
      description:
        "Want to know more about the compay? In this page STIMB shares all their characteristics that define them.",
      img: { src: stimbImages.features.about, type: "desktop" },
    },
    {
      title: "Contact form",
      description:
        "This page allows users to contact STIMB via phone, email, their social media or directly via an email form in this page.",
      img: { src: stimbImages.features.contact, type: "desktop" },
    },
    {
      title: "Modern design",
      description:
        "STIMB is fundamentally a tech company, that's why it was important for them to have a clean and modern design code, which was inspired by apple's macbook air m1's web page.",
      img: { src: stimbImages.features.modernDesign, type: "desktop" },
    },
    {
      title: "Responsiveness",
      description:
        "As stated, STIMB wanted to reach more clients, that's why it was important to allow anyone to check your site at any time, in any device.",
      img: { src: stimbImages.features.responsiveness, type: "phone" },
    },
  ],
};

export const regressionCalculator: Project = {
  id: "regressionCalculator",
  title: "Regression Calculator",
  category: "Medium-size school project",
  cover: regressionImages.cover,
  size: "medium",
  description: {
    short:
      "This project allows users to get a mathematical function that fits the input coordinates.",
    large:
      "This project consists of a regression calculator, where users enter coordinates and select a regression method, which can be polinomial, logaritmic, exponential, power or auto-detect (minimizes the error). Then, users can read the mathemetical function, the error (the average distance between the given coordinates and the function) and a graph that descrives the function and shows the input coordinates. This regression calculator allow users to make predictions of future events based on existing data.",
  },
  developmentProcess: {
    technologies: {
      description:
        "This project was developed in Vanilla JavaScript, and it's hosted in github pages.",
      technologies: ["JavaScript", "HTML 5", "CSS 3", "Github"],
    },
    timeLine: {
      weeks: 0.5,
      description: "This project was desined and developed in three days.",
    },
    team: {
      description: "I developed this project in my own.",
      members: [
        {
          img: me,
          name: "Me",
        },
      ],
    },
    deployment: {
      description: "This project is hosted in github. Check it out!",
      link: "https://ulisesaviles.github.io/Regression-Calculator/",
      qr: regressionImages.qr,
    },
  },
  type: "static web site",
  features: [
    {
      title: "Auto-detect",
      description:
        "This option lets users to just enter the coordinates and they will be given the function that minimizes the error (the distance between the function and the given coordinates). This should be used wisely to avoid overfitting.",
      img: { src: regressionImages.features.auto, type: "desktop" },
    },
    {
      title: "Polinomial regression",
      description:
        "Calculates the mathematical function that better fits the inputs using the polinomial regression method.",
      img: { src: regressionImages.features.poli, type: "desktop" },
    },
    {
      title: "Logaritmic regression",
      description:
        "Calculates the mathematical function that better fits the inputs using the logaritmic regression method.",
      img: { src: regressionImages.features.loga, type: "desktop" },
    },
    {
      title: "Exponential regression",
      description:
        "Calculates the mathematical function that better fits the inputs using the exponential regression method.",
      img: { src: regressionImages.features.expo, type: "desktop" },
    },
    {
      title: "Power regression",
      description:
        "Calculates the mathematical function that better fits the inputs using the power regression method.",
      img: { src: regressionImages.features.power, type: "desktop" },
    },
  ],
};

// Small
export const chomsky: Project = {
  id: "chomsky",
  title: "Chomsky normal form tutorial",
  category: "Small school project",
  cover: chomskyImages.cover,
  size: "small",
  description: {
    short:
      "A step by step guide in how to turn a context-free grammar into it's Chomsky normal form.",
    large: `This project explains a complex computer science concept (more accurately, one of automata theory). When you have a context-free grammar, you may want to "normalize" its form to garantee that all the rules are in a certain format. That's why the Chomsky's normal form exists. This project explains how to transform any free-context grammar into it's Chomsky's normal form.`,
  },
  developmentProcess: {
    technologies: {
      description:
        "This project was made using the TypeScript programming language with the Next.js reatc framework to build web apps. Github was used to control versions of the program. Vercel was used to host the app and make it avialable online.",
      technologies: ["Next.js", "Github", "TypeScript", "Vercel"],
    },
    timeLine: {
      weeks: 0.5,
      description:
        "This project was pretty straight-forward. Since it is a single-page site and I used the tech stack I like the most, It could be developed in just a couple of days.",
    },
    team: {
      description:
        "The web-app was fully developed by me, but a friend (my teammate in the assignment) helped me with some of the videos in the app.",
      members: [
        {
          img: me,
          name: "Me",
        },
        {
          img: acner,
          name: "Abner Silva",
        },
      ],
    },
    deployment: {
      description:
        "This project was deployed into vercel, since I used their Next.js react framework and they work great together.",
      link: "https://chomsky-normal-form.vercel.app/",
      qr: chomskyImages.qr,
    },
  },
  type: "static web site",
  features: [
    {
      title: "General explanation",
      description:
        "This site has the objective of explaining users a pretty complex topic. Therefore, the site starts giving users a general explanation of it.",
      img: { src: chomskyImages.features.general, type: "desktop" },
    },
    {
      title: "Step by step guide",
      description:
        "This problem is usually solved with a series of 5 steps that, if followed correctly, guarantee the correct result in all cases. Therefore, this site is structured in this way. Each step has a written explanation, a video explanation, and a short quiz.",
      img: { src: chomskyImages.features.steps, type: "desktop" },
    },
    {
      title: "Video explanations",
      description:
        "Most people appreciate visual explanations. That's why we decided to include a video explaining each step in detail and with examples.",
      img: { src: chomskyImages.features.video, type: "desktop" },
    },
    {
      title: "Interactive quizes with each video",
      description:
        "Once the users read the explanation and watched the video they are expected to understand the step, but it is not always the case. This site includes a short quiz to make sure that the user understood the topic.",
      img: { src: chomskyImages.features.quiz, type: "desktop" },
    },
    {
      title: "Responsiveness",
      description:
        "Need to quickly refresh the topic? No problem! This site looks great wether you visit it from your phone, laptop or tablet!",
      img: { src: chomskyImages.features.responsiveness, type: "phone" },
    },
  ],
};

export const wordSearch: Project = {
  id: "wordSearch",
  title: "Python word search",
  category: "Small school project",
  cover: wordSearchImages.cover,
  size: "small",
  description: {
    short:
      "Clasic word search. In this program, users search for words from the word bank. When they found one, they must write down the coordinates of it, and if it is there, it will be colored.",
    large:
      "In word search, users need to find words from the word bank. This game is usually played on a paper sheet, but in order to make it work in a python script, users enter the coordinates of the start and end of the word they found. If the word was there, it will be coloured in yellow. Users win when they found all the words. The logic behind this project was hard at the time I programmed it, since words are always re-shuffled and thet can cross each other, with letters overlapping. It is in this portfolio since it was a great project, even more considering that I developed it in my freshman year (in object-oriented-programming class).",
  },
  developmentProcess: {
    technologies: {
      description:
        "This project was entirely developed as a python script with no external libraries. At the time, I was just getting started with python, and I was enjoying it like crazy.",
      technologies: ["Python"],
    },
    timeLine: {
      weeks: 0.5,
      description:
        "This was an object-oriented-programming assingment, and we had 3 days to finish it. I was hard and I put every hour I could into it to deliver a great project, but the effort was worth it.",
    },
    team: {
      description: "I made this project on my own.",
      members: [
        {
          img: me,
          name: "Me",
        },
      ],
    },
    deployment: {
      description:
        "This is a python script that can be downloaded from the github repository to be runned locally.",
      link: "https://github.com/ulisesaviles/Word-Search-Python",
      qr: wordSearchImages.qr,
    },
  },
  type: "console game",
  features: [
    {
      title: "Enter the coordinates of your word",
      description: `When users start the game, the need to find the words from the word bank. If they do, they enter the coordinates from the first and last letter (As: "A1-C1").`,
      img: { src: wordSearchImages.features.default, type: "desktop" },
    },
    {
      title: "Watch it colored!",
      description:
        "If the coordinates that the used entered contained a valid word, it will be colored in yellow!",
      img: { src: wordSearchImages.features.colored, type: "desktop" },
    },
    {
      title: "Hide scrambled leters",
      description:
        "Are you having problems to find words? No problem, you can hide the scrambled letters running the other script contained in the repository.",
      img: { src: wordSearchImages.features.hidden, type: "desktop" },
    },
  ],
};

export const blackjack: Project = {
  id: "blackjack",
  title: "Python Blackjack",
  category: "Small school project",
  cover: blackJackImages.cover,
  size: "small",
  description: {
    short:
      "The infamous blackjack game. In this game, players are able to play blackjack making bets versus a dealer that is programed with real life rules.",
    large:
      "In this game, users are able to play blackjack versus a dealer that was programmed with real dealer rules (like not hittinng if thwy got more than 17). Users can bet money in their hands, then they can surrender if they didn't like it, hit another card if they are falling short, stand if they have a great play or double down if they feel lucky. At the end, the result is displayed and users can keep playing until they run out of money.",
  },
  developmentProcess: {
    technologies: {
      description:
        "This game was fully developed as a python script with no external libraries.",
      technologies: ["Python"],
    },
    timeLine: {
      weeks: 0.5,
      description:
        "This was the second time I programmed the blackjack game. The first time I did it in C++, but wthout bets, surrender and doble-down. So I had not much problem developing it in an easyer programming language, even with the new features.",
    },
    team: {
      description: "I made this project on my own.",
      members: [
        {
          img: me,
          name: "Me",
        },
      ],
    },
    deployment: {
      description:
        "This is a python script that can be downloaded from the github repository to be runned locally.",
      link: "https://github.com/ulisesaviles/BlackJack-Python",
      qr: blackJackImages.qr,
    },
  },
  type: "console game",
  features: [
    {
      title: "Enter the ammount of dollars you want to bet!",
      description:
        "At the start of the game, users are given 500 dollars to bet. They can choose any ammount to bet.",
      img: { src: blackJackImages.features.ammountToBet, type: "desktop" },
    },
    {
      title: "Read the instructions",
      description:
        "Since this game's menu has a lot of options, it has an instruction set to allow users to understand the game and all the available options.",
      img: { src: blackJackImages.features.instrucciones, type: "desktop" },
    },
    {
      title: "Watch your hand",
      description:
        "Once you place your bet, you and the dealer are given 2 cards each, but you cannot see one of the dealer's. So you must choose a good strategy based on the available information!",
      img: { src: blackJackImages.features.watch, type: "desktop" },
    },
    {
      title: "Get another card",
      description:
        "Falling short? Get another card! If you are lower than 21, you can always hit for a new card (hoping no to pass 21!).",
      img: { src: blackJackImages.features.hit, type: "desktop" },
    },
    {
      title: "Double down!",
      description:
        "Feeling lucky? Double down! You double your bet and are given another card, which you will stay with. Good luck!",
      img: { src: blackJackImages.features.double, type: "desktop" },
    },
    {
      title: "Stand",
      description:
        "You got a great play? Stay! Once you stay, you cannot get another card, and the dealer's cards are shown.",
      img: { src: blackJackImages.features.stand, type: "desktop" },
    },
    {
      title: "Surrender",
      description:
        "Your hand is not looking good? No problem, surrender! If you surrender the turn is over but you only loose half of the money you bet",
      img: { src: blackJackImages.features.surrender, type: "desktop" },
    },
    {
      title: "Watch results",
      description:
        "Once the game is over, the dealer's cards are shown. If you got closer to 21 than him (under it), you double your money!",
      img: { src: blackJackImages.features.results, type: "desktop" },
    },
  ],
};

export const goFish: Project = {
  id: "goFish",
  title: "C++ Go-fish",
  category: "Small school project",
  cover: goFishImages.cover,
  size: "small",
  description: {
    short:
      "Good old go-fish. This is a game for 2-4 players in which they play with all the real rules.",
    large: `This project simulates the famous card game "Go-fish" with all the real rules, in which players can choose to take cards from the deck or the pool, then the program detects if they have a valid play (royal flush, full house, three of a kind, etc) and finally then they choose which card to throw. Then it's the next player's turn. This is not the biggest of my projects, but I decided to included since I developed it with around 3 months of experience programming. It was a big challange for me at the time, however, I made a great effort to deliver the assignment on time, and made it with (kind of) a visual interface.`,
  },
  developmentProcess: {
    technologies: {
      description:
        "This project was completely developed using C++ programming language, which was the first language I learned to use. This is the only project in this portfolio made with C++, since other languages aligned better with my goals (like JavaScript).",
      technologies: ["C++"],
    },
    timeLine: {
      weeks: 0.5,
      description:
        "As I said, this project was developed when I had just around 3 months programming. Therefore, a three-day deadline seemed insane. However, I did my best and was able to deliver it on time.",
    },
    team: {
      description: "I made this project on my own.",
      members: [
        {
          img: me,
          name: "Me",
        },
      ],
    },
    deployment: {
      description:
        "Since the project was made using C++, the format of the file is .exe. It can be dowloaded from github, as well as the source code.",
      link: "https://github.com/ulisesaviles/Go-Fish-C-plus-plus",
      qr: goFishImages.qr,
    },
  },
  type: "console game",
  features: [
    {
      title: "Choose the ammout of players",
      description:
        "The game can be played by 2-4 players. They will play turns to play as if it was the real game, and the program will hide the cars of the players not in turn.",
      img: { src: goFishImages.features.choosePlayers, type: "desktop" },
    },
    {
      title: "Choose where to draw your card from",
      description:
        "The players have the option to take cards from the deck or the pool, in which the deck is filled with 4 cards of each number and suffled as if it was a real one, and the pool has the card that the last player dropped. The pool is empty at the start of the game.",
      img: { src: goFishImages.features.whereToTake, type: "desktop" },
    },
    {
      title: "Choose to use a play",
      description:
        "Once you take a card from the pool or deck, the program will detect if you have a valid play (royal flush, full house, three of a kind, etc). If you do, it will ask you if you want to play with it, if not, then you will keep playing as normal.",
      img: { src: goFishImages.features.choosePlay, type: "desktop" },
    },
    {
      title: "Remove a card from your hand",
      description:
        "Once you choose your play (or not), you have to choose which card to remove from your hand. If you have a valid play and you choose to use it, the program will not let you remove a card that is part of that play.",
      img: { src: goFishImages.features.cardToThrow, type: "desktop" },
    },
    {
      title: "Watch the result!",
      description:
        "Once a player chooses to use a play, it will be the last chance of the rest of the players to come out with something better. Once the last round is over, the program will print the winner.",
      img: { src: goFishImages.features.results, type: "desktop" },
    },
  ],
};

// All projects
export const allProjects: Project[] = [
  // Large
  tendrishApp,
  tendrishDashboard,
  poleo,
  liveChatApp,
  investNGrow,
  // Medium
  turfmasters,
  stimb,
  regressionCalculator,
  // Small
  chomsky,
  wordSearch,
  blackjack,
  goFish,
];
