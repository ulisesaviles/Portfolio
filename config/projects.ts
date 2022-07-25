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
      qr: tendrishImages.qr,
    },
  },
  type: "web-app",
  features: [
    {
      title: "APP USER'S STATS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: { src: tendrishImages.features.stats, type: "desktop" },
    },
    {
      title: "CREATE RECIPES",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: { src: tendrishImages.features.createRecipe, type: "desktop" },
    },
    {
      title: "CHECK THE ADMIN'S AGENDA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: { src: tendrishImages.features.agenda, type: "desktop" },
    },
    {
      title: "VIEW EXISTING RECIPES",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: { src: tendrishImages.features.recipeFinder, type: "desktop" },
    },
    {
      title: "EDIT USER'S MEAL PLANS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: { src: tendrishImages.features.userFinder, type: "desktop" },
    },
    {
      title: "CHECK THE ADMIN'S AGENDA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: { src: tendrishImages.features.agenda, type: "desktop" },
    },
  ],
};

// Medium
export const turfmasters: Project = {
  id: "turfmasters",
  title: "Turfmasters website",
  category: "Medium-size free-lance project",
  cover: tendrishImages.cover,
  size: "medium",
  description: {
    short:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate purus.",
    large:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie  orci, eget condimentum nisi consequat vitae.\nDonec lectus felis, varius quis bibendum eu, convallis nec eros. Nam ultricies interdum laoreet. Integer non est sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ut viverra sem. Mauris in tortor sit amet purus tristique accumsan.\nSuspendisse ac diam velit. Suspendisse tellus velit, cursus id mi at, commodo semper ante.",
  },
  developmentProcess: {
    technologies: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      technologies: ["ReactJS", "Github", "JavaScript", "Adobe Xd"],
    },
    timeLine: {
      weeks: 2,
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
      link: "https://ulisesaviles.github.io/TurfMasters/contact/es",
      // qr: me,
    },
  },
  type: "static web site",
  features: [
    {
      title: "Brand-friendly design code",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: { src: tendrishImages.features.stats, type: "desktop" },
    },
    {
      title: "Responsiveness",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: { src: tendrishImages.features.createRecipe, type: "desktop" },
    },
    {
      title: "Product catalog",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: { src: tendrishImages.features.agenda, type: "desktop" },
    },
    {
      title: "Multiple languages",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: { src: tendrishImages.features.recipeFinder, type: "desktop" },
    },
    {
      title: "contact form",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu sodales, finibus turpis ac, finibus erat. Pellentesque mattis, nisi ac interdum vulputate, purus ligula interdum odio, nec dignissim nisi metus eget risus. Fusce consectetur molestie orci, eget condimentum nisi consequat vitae.",
      img: { src: tendrishImages.features.userFinder, type: "desktop" },
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
  tendrishDashboard,
  // Medium
  turfmasters,
  // Small
  chomsky,
  wordSearch,
  blackjack,
  goFish,
];
