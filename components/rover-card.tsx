import React from "react";
import Link from "next/link";

const RoverCard = ({ name }) => {
  return (
    <div>
      <img src={`/images/${name}.jpg`}></img>
      <Link href={`/rovers/[${name}]`} as={`/rovers/${name}`}>
        <a className="hover:underline">{name}</a>
      </Link>
    </div>
  );
};

export default RoverCard;
