import React from "react";

import Layout from "../components/Layout";
import ME_IMG from "../../static/img/Arijit Saha.jpg";
import "./index.css";

const IndexPage = () => {
  return (
    <Layout>
      <div className="w-4/5 mx-auto grid grid-cols-1 min-h-full auto-rows-max sm:grid-cols-4 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
        <div className="z-10 row-span-full col-end-4 col-span-3 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
          {/*<p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">
            Entire house
          </p>*/}
          <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-10 md:text-5xl">
            I am a CS undergrad who loves to solve problems and learn new
            technologies
          </h2>
        </div>
        <div className="row-span-full col-start-1 flex sm:col-span-2 sm:col-end-5">
          <div className="w-full grid grid-cols-1 gap-2">
            <div className="col-span-1 md:col-span-1">
              <img src={ME_IMG} alt="" className="inset-0 w-full bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

//     <div className="introDiv">
//       <div className="mediaLinks">
//         <a
//           href="https://www.linkedin.com/in/thearijitsaha/"
//           className="linkIcon fa fa-linkedin"
//           target="_blank"
//         ></a>
//         <a
//           href="https://twitter.com/thearijitsaha"
//           className="linkIcon fa fa-twitter"
//           target="_blank"
//         ></a>
//         <a
//           href="https://github.com/TheArijitSaha"
//           className="linkIcon fa fa-github"
//           target="_blank"
//         ></a>
//         <!-- <a
//           href="https://www.facebook.com/ArijitRox"
//           className="linkIcon fa fa-facebook"
//           target="_blank"
//         ></a> -->
//       </div>
//       <div className="introText">
//         <p className="primary">
//           I am a CS undergrad who loves to solve problems and learn new
//           technologies
//         </p>
//         <hr className="line" />
//         <p className="secondary">
//           I am a final year CSE student at
//           <a
//             href="https://www.iiests.ac.in/"
//             style="text-decoration: none; color: #555;"
//             target="_blank"
//             >IIEST, Shibpur</a
//           >
//           and an avid competitive programmer.
//         </p>
//       </div>
//       <img src="static/images/me.jpg" />
//     </div>
//
//     <!-- Internship information -->
//     <!-- <div className="infoDiv">
//       <div className="infoHeader CPHeader">
//         <p className="infoIntro CPIntro">Internships</p>
//       </div>
//
//       <div className="projectPane MSLogoImg">
//         <div className="header">
//           <span className="date">Summer 2020</span>
//           <br />
//           <span className="name">Microsoft</span>
//           <br />
//           <span className="link">
//             Software Engineer Intern
//           </span>
//         </div>
//         <div className="content">
//           <p>
//             As part of the Edge PDF team, enhanced user experience by adding an
//             annotation feature.
//           </p>
//         </div>
//       </div>
//
//       <div className="projectPane ISILogoImg">
//         <div className="header">
//           <span className="date">Summer 2019</span>
//           <br />
//           <span className="name">ISI Kolkata</span>
//           <br />
//           <span className="link">
//             Research Intern
//           </span>
//         </div>
//         <div className="content">
//           <p>
//             Worked on Quantum Cryptographic simulations using IBM's Quantum
//             Computer and QUISKIT. Calculated Mutually Unbiased Bases in multiple
//             dimensions.
//           </p>
//         </div>
//       </div>
//     </div> -->
//
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
