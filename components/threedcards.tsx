import { ThreeDCard } from "./functional/3d-card";

const ThreeDCards = () => {
  return Projects.map(({ name, image, description, stack, link }) => (
    <ThreeDCard
      key={name}
      name={name}
      image={image}
      description={description}
      stack={stack}
      link={link}
    />
  ));
};

export default ThreeDCards;

const Projects = [
  {
    name: "Bookings App",
    image: "/airbnb.png",
    description: "Booking app, for rental and listing",
    stack: [
      { id: 1, name: "MongoDB", image: "/mongodb-color.svg" },
      { id: 2, name: "Express", image: "/express-color.svg" },
      { id: 3, name: "React", image: "/react-color.svg" },
      { id: 4, name: "NodeJS", image: "/nodedotjs-color.svg" },
    ],
    link: "/projects/bookings-app",
  },
  {
    name: "Wallet App",
    image: "/project/paytm4.png",
    description:
      "This wallet app is a robust and secure platform for managing money transfers.",
    stack: [
      { id: 1, name: "Turborepo", image: "turborepo-color.svg" },
      { id: 2, name: "Next.js", image: "nextdotjs-color.svg" },
      { id: 3, name: "PostgreSQL", image: "postgresql-color.svg" },
      { id: 4, name: "Prisma", image: "prisma-color.svg" },
      { id: 5, name: "Express", image: "express-color.svg" },
    ],
    link: "/projects/wallet-app",
  },
  {
    name: "Narrate",
    image: "/project/narrate1.png",
    description: "Blogging platform for writers and readers",
    stack: [
      { id: 1, name: "Hono", image: "hono-color.svg" },
      { id: 2, name: "React", image: "react-color.svg" },
      { id: 3, name: "PostgreSQL", image: "postgresql-color.svg" },
      { id: 4, name: "Prisma", image: "prisma-color.svg" },
      { id: 5, name: "TypeScript", image: "typescript-color.svg" },
    ],
    link: "/projects/narrate",
  },
  {
    name: "LinkHub",
    image: "/project/linkhub1.png",
    description: "A link sharing platform",
    stack: [
      { id: 1, name: "Hono", image: "hono-color.svg" },
      { id: 2, name: "Next.js", image: "nextdotjs-color.svg" },
      { id: 3, name: "PostgreSQL", image: "postgresql-color.svg" },
      { id: 4, name: "Prisma", image: "prisma-color.svg" },
      { id: 5, name: "TypeScript", image: "typescript-color.svg" },
    ],
    link: "/projects/linkhub",
  },
  {
    name: "VidShare",
    image: "/backend-project.png",
    description: "Backend for a video sharing platform",
    stack: [
      { id: 1, name: "Express", image: "/express-color.svg" },
      { id: 2, name: "MongoDB", image: "/mongodb-color.svg" },
      { id: 4, name: "Mongoose", image: "/mongoose-color.svg" },
      { id: 3, name: "Node.js", image: "/nodedotjs-color.svg" },
    ],
    link: "/projects/backend-project",
  },
];
