import React, { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type ProfileLinkIconProps = {
  title: string;
  icon: IconDefinition;
  link: string;
};

const ProfileLinkIcon: FC<ProfileLinkIconProps> = ({ icon, title, link }) => {
  return (
    <div className="text-purple-700 px-3 py-1">
      <a href={link} target="_blank">
        <FontAwesomeIcon
          className="text-lg md:text-3xl"
          icon={icon}
          title={title}
        />
      </a>
    </div>
  );
};

export default ProfileLinkIcon;
