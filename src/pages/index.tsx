import React from "react";

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  );
};

//   <div class="topnav">
//       <div class="brand">
//         <a class="name" href="index.html">ARIJIT SAHA</a>
//       </div>
//       <div class="navlinks">
//         <!-- <div>
//           <a href="index.html" class="active">HOME</a>
//         </div>
//         <div>
//           <a href="projects.html">PROJECTS</a>
//         </div> -->
//       </div>
//     </div>
//
//     <div class="introDiv">
//       <div class="mediaLinks">
//         <a
//           href="https://www.linkedin.com/in/thearijitsaha/"
//           class="linkIcon fa fa-linkedin"
//           target="_blank"
//         ></a>
//         <a
//           href="https://twitter.com/thearijitsaha"
//           class="linkIcon fa fa-twitter"
//           target="_blank"
//         ></a>
//         <a
//           href="https://github.com/TheArijitSaha"
//           class="linkIcon fa fa-github"
//           target="_blank"
//         ></a>
//         <!-- <a
//           href="https://www.facebook.com/ArijitRox"
//           class="linkIcon fa fa-facebook"
//           target="_blank"
//         ></a> -->
//       </div>
//       <div class="introText">
//         <p class="primary">
//           I am a CS undergrad who loves to solve problems and learn new
//           technologies
//         </p>
//         <hr class="line" />
//         <p class="secondary">
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
//     <!-- <div class="infoDiv">
//       <div class="infoHeader CPHeader">
//         <p class="infoIntro CPIntro">Internships</p>
//       </div>
//
//       <div class="projectPane MSLogoImg">
//         <div class="header">
//           <span class="date">Summer 2020</span>
//           <br />
//           <span class="name">Microsoft</span>
//           <br />
//           <span class="link">
//             Software Engineer Intern
//           </span>
//         </div>
//         <div class="content">
//           <p>
//             As part of the Edge PDF team, enhanced user experience by adding an
//             annotation feature.
//           </p>
//         </div>
//       </div>
//
//       <div class="projectPane ISILogoImg">
//         <div class="header">
//           <span class="date">Summer 2019</span>
//           <br />
//           <span class="name">ISI Kolkata</span>
//           <br />
//           <span class="link">
//             Research Intern
//           </span>
//         </div>
//         <div class="content">
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
//     <!-- <div class="infoDiv CPDiv">
//       <div class="infoHeader CPHeader">
//         <p class="infoIntro CPIntro">Competitive Programming</p>
//       </div>
//
//       <div class="CPProfile">
//         <a
//           href="https://codeforces.com/profile/DerUbermensch"
//           class="CPLink"
//           target="_blank"
//         >
//           <span
//             class="iconify"
//             width="3em"
//             height="3em"
//             data-icon="simple-icons:codeforces"
//             data-inline="false"
//           ></span>
//           <p class="CPRating">Candidate Master [1958]</p>
//         </a>
//         <a
//           href="https://www.codechef.com/users/thearijit2k"
//           class="CPLink"
//           target="_blank"
//         >
//           <span
//             class="iconify"
//             width="3em"
//             height="3em"
//             data-icon="simple-icons:codechef"
//             data-inline="false"
//           ></span>
//           <p class="CPRating">5★ [2110]</p>
//         </a>
//         <a
//           href="https://www.hackerrank.com/profile/TheArijitSaha"
//           class="CPLink"
//           target="_blank"
//         >
//           <span
//             class="iconify"
//             width="3em"
//             height="3em"
//             data-icon="cib:hackerrank"
//             data-inline="false"
//           ></span>
//         </a>
//         <a
//           href="https://www.topcoder.com/members/arijitbiley"
//           class="CPLink"
//           target="_blank"
//         >
//           <span
//             class="iconify"
//             width="3em"
//             height="3em"
//             data-icon="simple-icons:topcoder"
//             data-inline="false"
//           ></span>
//           <p class="CPRating">[1157]</p>
//         </a>
//       </div>
//
//       <div class="CPImage">
//         <a href="https://icpc.global/ICPCID/TNBAW0H4S6LD"
//           ><p>ICPC'20 Regionalist [Rank 39]</p></a
//         >
//       </div>
//     </div> -->
//
//     <!-- <div class="commentDiv">
//       <p class="header">Comments</p>
//       <div class="commentListDiv"></div>
//     </div> -->

export default IndexPage;