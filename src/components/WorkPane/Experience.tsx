import React, { FC } from "react";

type ExperienceRef = {
  text: string;
  link: string;
};

export type ExperienceProps = {
  title: string;
  subtitle?: string;
  bgImg: string;
  period: string;
  desc?: string;
  refs?: ExperienceRef[];
};

const Experience: FC<ExperienceProps> = ({
  title,
  desc,
  refs = [],
  bgImg,
  subtitle,
  period,
}) => {
  return (
    <div
      className={
        "my-1 rounded inline-block w-full flex-auto flex-wrap flex-grow" +
        " md:w-1/2 lg:w-1/3"
      }
    >
      <div className="relative overflow-hidden rounded md:m-1 lg:m-2">
        <img
          src={bgImg}
          alt=""
          className="-z-10 pointer-events-none absolute object-cover object-center min-h-full min-w-full rounded"
        />
        <div className="rounded flex flex-col justify-between p-3 bg-black bg-opacity-80 h-52">
          <h3 className="font-medium text-indigo-100 text-lg text-center">
            {title}
          </h3>
          {subtitle && (
            <p className="font-thin text-sm text-gray-200 text-center">
              {subtitle}
            </p>
          )}
          <p className="text-sm text-gray-200 text-center">({period})</p>
          {desc && (
            <p className="py-3 text-md text-gray-200 text-center">{desc}</p>
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
    </div>
  );
};

export default Experience;
