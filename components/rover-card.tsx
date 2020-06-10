import React from "react";
import Link from "next/link";

const RoverCard = ({ name }) => {
  return (
    <Link href={`/rovers/[${name}]`} as={`/rovers/${name}`}>
      <a>
        <img src={`/images/${name}.jpg`}></img>
        <span>Curiosity</span>
      </a>
    </Link>
  );
};

export default RoverCard;
