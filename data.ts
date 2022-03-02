import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "타이틀1",
    about:
      "내용1",
  },
  {
    Icon: FaServer,
    title: "타이틀2",
    about:
      "내용2",
  },
  {
    Icon: AiOutlineApi,
    title: "타이틀3",
    about:
      "내용3 ",
  },
  {
    Icon: MdDeveloperMode,
    title: "타이틀4",
    about: "내용4 ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "타이틀5",
    about:
      "내용5",
  },
  {
    Icon: RiComputerLine,
    title: "타이틀6",
    about:
      "내용6",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "기술1",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "기술2",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "기술3",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "기술4",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "기술5",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "기술6",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "기술7",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "기술8",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "기술9",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "기술10",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    id: 0,
    name: "포폴1",
    description:
      "설명1",
    image_path: "/images/covid.jpg",
    deployed_url: "/images/covid.jpg",
    github_url: "/images/covid.jpg",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 7,
    name: "포폴2",
    //TODO add data
    image_path: "/images/covid.jpg",
    deployed_url: "/images/covid.jpg",
    github_url: "/images/covid.jpg",
    category: ["react"],
    description:
      "설명2",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    id: 1,
    name: "포폴3",
    image_path: "/images/covid.jpg",
    deployed_url: "/images/covid.jpg",
    github_url: "/images/covid.jpg",
    category: ["node", "mongo", "react"],
    description:
      "설명3",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    id: 2,
    name: "포폴4",
    image_path: "/images/covid.jpg",
    deployed_url: "/images/covid.jpg",
    github_url: "/images/covid.jpg",
    //TODO type on category
    category: ["node", "react"],
    description:
      "설명4",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id: 3,
    name: "포폴5",
    image_path: "/images/covid.jpg",
    deployed_url: "/images/covid.jpg",
    github_url: "/images/covid.jpg",
    category: ["django", "react"],
    description:
      "설명5",
    key_techs: ["React", "Django", "Django REST API"],
  },
  {
    id: 4,
    name: "포폴6",
    image_path: "/images/covid.jpg",
    deployed_url: "/images/covid.jpg",
    category: ["vanilla"],
    github_url: "/images/covid.jpg",
    description: "설명6",
    key_techs: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
  },

  {
    id: 5,
    name: "포폴7",
    image_path: "/images/covid.jpg",
    deployed_url: "/images/covid.jpg",
    github_url: "/images/covid.jpg",
    category: ["express", "ml"],
    description:
      "설명7",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    id: 6,
    name: "포폴8 ",
    image_path: "/images/covid.jpg",
    deployed_url: "/images/covid.jpg",
    github_url: "/images/covid.jpg",
    category: ["express", "ml"],
    description:
      '설명8 ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    id: 9,
    name: "포폴9",
    //TODO add image,github,dep url
    image_path: "/images/covid.jpg",
    deployed_url: "/images/covid.jpg",
    github_url: "/images/covid.jpg",
    category: ["react"],
    description:
      "설명9 ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];