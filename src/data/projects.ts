import { ProjectProps } from "../components/ProjectsPane/Project";
import mymdbImg from "../../static/img/projects/MyMDbImg.png";
import graphTheoreticTextAnalysisImg from "../../static/img/projects/graphTextImg.png";
import iiestNexusImg from "../../static/img/projects/IIESTNexusImg.png";
import crioStudentDeveloperImg from "../../static/img/projects/crioCertImg.png";

const projects: ProjectProps[] = [
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
    title: "MyMDb",
    bgImg: mymdbImg,
    desc: "A web app to keep track of what movies, series you have watched or wish to watch.",
    refs: [
      {
        text: "Repository Link",
        link: "https://github.com/TheArijitSaha/MyMDb",
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
