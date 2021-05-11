import React from "react";

import Layout from "../components/Layout";
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import ME_IMG from "../../static/img/Arijit Saha.jpg";
import ProfileLinkIcon from "../components/ProfileLinkIcon";
import "./body-bg.css";
import ProjectsPane from "../components/ProjectsPane";
import WorkPane from "../components/WorkPane";

const IndexPage = () => {
  return (
    <Layout>
      <div className="w-11/12 md:w-4/5 mx-auto grid grid-cols-1 min-h-full auto-rows-max sm:grid-cols-4 sm:px-8 sm:py-12 sm:gap-x-8 md:py-4">
        <div className="flex flex-col z-10 row-span-full col-end-4 col-span-3 px-4 pt-40 pb-3 justify-end sm:justify-start bg-gradient-to-t from-black sm:bg-none">
          <h2 className="text-xl text-center sm:text-left font-semibold text-white sm:text-2xl sm:leading-10 md:text-5xl">
            I am a CS undergrad who loves to solve problems and learn new
            technologies
          </h2>
          <div className="flex flex-row py-3 md:py-8 justify-center sm:justify-start">
            <ProfileLinkIcon
              icon={faLinkedinIn}
              link="https://www.linkedin.com/in/thearijitsaha/"
              title="Linked In Profile"
            />
            <ProfileLinkIcon
              icon={faGithub}
              link="https://github.com/TheArijitSaha"
              title="Github Profile"
            />
            <ProfileLinkIcon
              icon={faTwitter}
              link="https://twitter.com/thearijitsaha"
              title="Twitter Profile"
            />
          </div>
        </div>
        <div className="row-span-full col-start-1 flex sm:col-span-2 sm:col-end-5">
          <div className="w-full grid grid-cols-1 gap-2">
            <div className="col-span-1 md:col-span-1">
              <img src={ME_IMG} alt="" className="inset-0 w-full bg-gray-100" />
            </div>
          </div>
        </div>
      </div>

      <WorkPane />
      <ProjectsPane />
    </Layout>
  );
};

//     <!-- Competitive Programming information -->
//     <!-- <div className="infoDiv CPDiv">
//       <div className="infoHeader CPHeader">
//         <p className="infoIntro CPIntro">Competitive Programming</p>
//       </div>
//
//       <div className="CPProfile">
//         <a
//           href="https://codeforces.com/profile/DerUbermensch"
//           className="CPLink"
//           target="_blank"
//         >
//           <span
//             className="iconify"
//             width="3em"
//             height="3em"
//             data-icon="simple-icons:codeforces"
//             data-inline="false"
//           ></span>
//           <p className="CPRating">Candidate Master [1958]</p>
//         </a>
//         <a
//           href="https://www.codechef.com/users/thearijit2k"
//           className="CPLink"
//           target="_blank"
//         >
//           <span
//             className="iconify"
//             width="3em"
//             height="3em"
//             data-icon="simple-icons:codechef"
//             data-inline="false"
//           ></span>
//           <p className="CPRating">5★ [2110]</p>
//         </a>
//         <a
//           href="https://www.hackerrank.com/profile/TheArijitSaha"
//           className="CPLink"
//           target="_blank"
//         >
//           <span
//             className="iconify"
//             width="3em"
//             height="3em"
//             data-icon="cib:hackerrank"
//             data-inline="false"
//           ></span>
//         </a>
//         <a
//           href="https://www.topcoder.com/members/arijitbiley"
//           className="CPLink"
//           target="_blank"
//         >
//           <span
//             className="iconify"
//             width="3em"
//             height="3em"
//             data-icon="simple-icons:topcoder"
//             data-inline="false"
//           ></span>
//           <p className="CPRating">[1157]</p>
//         </a>
//       </div>
//
//       <div className="CPImage">
//         <a href="https://icpc.global/ICPCID/TNBAW0H4S6LD"
//           ><p>ICPC'20 Regionalist [Rank 39]</p></a
//         >
//       </div>
//     </div> -->
//
//     <!-- <div className="commentDiv">
//       <p className="header">Comments</p>
//       <div className="commentListDiv"></div>
//     </div> -->

export default IndexPage;
