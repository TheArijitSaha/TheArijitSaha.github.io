import { ExperienceProps } from "../components/WorkPane/Experience";
import isiLogoImg from "../../static/img/experiences/ISILogoImg.png";
import googleLogoImg from "../../static/img/experiences/GoogleLogoImg.jpg";
import msLogoImg from "../../static/img/experiences/MSLogoImg.jpg";

const experiences: ExperienceProps[] = [
  {
    title: "Google SPS",
    bgImg: googleLogoImg,
    period: "Summer 2020",
    desc: "Developed a website to create, outsource and accept tasks",
    refs: [
      {
        text: "Certificate",
        link: "https://drive.google.com/file/d/1RQ2l48sf8wsuQVqNxkbHr0vjf4OCy8m9/view?usp=sharing",
      },
    ],
  },
  {
    title: "Microsoft",
    subtitle: "Software Developer Intern",
    period: "Summer 2020",
    bgImg: msLogoImg,
    desc: "As part of the Edge PDF team, enhanced user experience by adding an annotation feature",
    refs: [
      {
        text: "Certificate",
        link: "https://drive.google.com/file/d/1P31Xq8noXwuDG_7WAjCRh9vX_QsAT2_Y/view?usp=sharing",
      },
    ],
  },
  {
    title: "ISI Kolkata",
    subtitle: "Research Intern",
    bgImg: isiLogoImg,
    period: "Summer 2019",
    desc: "Worked on Quantum Cryptographic simulations using IBM's Quantum Computer and QUISKIT",
    refs: [
      {
        text: "Certificate",
        link: "https://drive.google.com/file/d/1ODYt3J0qx4jnjmZwrhxzwVkTYyqA1ckT/view?usp=sharing",
      },
    ],
  },
];

export default experiences;
