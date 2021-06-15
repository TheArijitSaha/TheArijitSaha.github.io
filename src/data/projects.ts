import { ProjectProps } from "../components/ProjectsPane/Project";
import haven from "../../static/img/projects/Haven.png";
import consoleTetris from "../../static/img/projects/ConsoleTetris.png";
import mymdbImg from "../../static/img/projects/MyMDbImg.png";
import mymdbApp from "../../static/img/projects/MyMDbApp.png";
import graphTheoreticTextAnalysisImg from "../../static/img/projects/graphTextImg.png";
import iiestNexusImg from "../../static/img/projects/IIESTNexusImg.png";
import crioStudentDeveloperImg from "../../static/img/projects/crioCertImg.png";

const projects: ProjectProps[] = [
  {
    title: "Haven",
    bgImg: haven,
    desc: "A react native based mobile crowdsensing app to track COVID-appropriate behaviour at places of interest.",
    refs: [
      {
        text: "Repository Link",
        link: "https://github.com/TheArijitSaha/Haven",
      },
    ],
  },
  {
    title: "MyMDb Native App",
    bgImg: mymdbApp,
    desc: "A react native app to keep track of what movies, series I have watched or wish to watch.",
    refs: [
      {
        text: "Repository Link",
        link: "https://github.com/TheArijitSaha/MyMDb-RN-App",
      },
    ],
  },
  {
    title: "Console Tetris",
    bgImg: consoleTetris,
    desc: "A c++ app to play tetris in the linux console.",
    refs: [
      {
        text: "Repository Link",
        link: "https://github.com/TheArijitSaha/console-tetris",
      },
    ],
  },
  {
    title: "Student Backend Developer",
    bgImg: crioStudentDeveloperImg,
    desc: "Developed three independent projects involving linux, web development and data structures and algorithms. Check out the portfolio for specifics.",
    refs: [
      {
        text: "Portfolio Link",
        link: "https://criodo.github.io/Crio-Launch-Feb-2020-arijitbiley/",
      },
    ],
  },
  {
    title: "MyMDb Web App",
    bgImg: mymdbImg,
    desc: "A PHP web app to keep track of what movies, series you have watched or wish to watch.",
    refs: [
      {
        text: "Repository Link",
        link: "https://github.com/TheArijitSaha/MyMDb-Web",
      },
    ],
  },
  {
    title: "Graph Theoretic Text Analysis",
    bgImg: graphTheoreticTextAnalysisImg,
    desc: "Seeking out representative keywords from text by constructing co-occurence graphs.",
    refs: [
      {
        text: "Repository Link",
        link: "https://github.com/TheArijitSaha/Graph_Theoretic_Text_Analysis",
      },
    ],
  },
  {
    title: "Skill-based social network",
    bgImg: iiestNexusImg,
    desc: "A social networking web app with chat, post and search facility. Users can find people based on skills. Followers can view posts, like and comment.",
    refs: [
      {
        text: "Repository Link",
        link: "https://github.com/TheArijitSaha/Web-Tech-5thSem-Assignments/tree/master/IIEST_Nexus",
      },
    ],
  },
];

export default projects;
