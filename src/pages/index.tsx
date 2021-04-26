import React from "react";

import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
        <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
          <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">
            Entire house
          </p>
          <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">
            Beach House in Collingwood
          </h2>
        </div>
        <div className="col-start-1 row-start-2 px-4 sm:pb-16">
          <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-violet-600"
            >
              <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
            </svg>
            <div className="ml-1">
              <span className="text-black">4.94</span>
              <span className="sm:hidden md:inline">(128)</span>
            </div>
            <div className="text-base font-normal mx-2">·</div>
            <div>Collingwood, Ontario</div>
          </div>
          <hr className="w-16 border-gray-300 hidden sm:block" />
        </div>
        <div className="col-start-1 row-start-3 space-y-3 px-4">
          <p className="flex items-center text-black text-sm font-medium">
            <img
              src="/kevin-francis.jpg"
              alt=""
              className="w-6 h-6 rounded-full mr-2 bg-gray-100"
            />
            Hosted by Kevin Francis
          </p>
          <button
            type="button"
            className="bg-violet-100 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg"
          >
            Check availability
          </button>
        </div>
        <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
          <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
            <div className="relative col-span-3 row-span-2 md:col-span-2">
              <img
                src="/beach-house.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/beach-house-interior.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/beach-house-view.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

//   <div className="topnav">
//       <div className="brand">
//         <a className="name" href="index.html">ARIJIT SAHA</a>
//       </div>
//       <div className="navlinks">
//         <!-- <div>
//           <a href="index.html" className="active">HOME</a>
//         </div>
//         <div>
//           <a href="projects.html">PROJECTS</a>
//         </div> -->
//       </div>
//     </div>
//
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
