import React, { FC } from "react";

type ProjectRef = {
  text: string;
  link: string;
};

export type ProjectProps = {
  title: string;
  bgImg: string;
  desc?: string;
  refs: ProjectRef[];
};

const Project: FC<ProjectProps> = ({ title, desc, refs = [], bgImg }) => {
  return (
    <div
      className={`my-1 rounded inline-block overflow-hidden relative w-full`}
    >
      <img
        src={bgImg}
        alt=""
        className="-z-10 pointer-events-none absolute object-cover object-center min-h-full min-w-full rounded"
      />
      <div className="rounded flex flex-col p-3 bg-black bg-opacity-70">
        <h3 className="font-medium text-indigo-100 text-lg text-center">
          {title}
        </h3>
        {desc && (
          <p className="py-3 text-md text-gray-300 text-center">{desc}</p>
        )}
        {refs.map((ref, index) => (
          <p key={index} className="text-md text-gray-300 text-center">
            <a href={ref.link} target="_blank" className="underline">
              {ref.text}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Project;
