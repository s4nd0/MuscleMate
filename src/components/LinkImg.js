import React from "react";

const LinkImg = ({ href, src, alt }) => {
  return (
    <a target="_blank" rel="noreferrer" href={href}>
      <img src={src} alt={alt} />
    </a>
  );
};

export default LinkImg;
