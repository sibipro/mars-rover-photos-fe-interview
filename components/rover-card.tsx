import React from "react";
import Link from "next/link";

const roverDescriptions = {
  curiosity:
    "Curiosity is a car-sized rover designed to explore the crater Gale on \
  Mars as part of NASA's Mars Science Laboratory mission (MSL).\
  Curiosity was launched from Cape Canaveral on November 26, 2011, at \
  15:02 UTC and landed on Aeolis Palus inside Gale on Mars on August 6,\
  2012, 05:17 UTC.",
  opportunity:
    'Opportunity, also known as MER-B (Mars Exploration Rover – B) or MER-1,\
      and nicknamed "Oppy" is a robotic rover that was active on Mars from 2004 \
      until the middle of 2018.[2] Launched on July 7, 2003, as part of NASA\'s \
      Mars Exploration Rover program, it landed in Meridiani Planum on January 25,\
     2004, three weeks after its twin Spirit (MER-A) touched down on the other side\
     of the planet.',
  spirit: `Spirit, also known as MER-A or MER-2, is a robotic rover on Mars,\
   active from 2004 to 2010. It was one of two rovers of NASA's Mars Exploration Rover Mission.\
   It landed successfully within the impact crater Gusev on Mars at 04:35 Ground UTC on January 4, 2004, \ 
   three weeks before its twin, Opportunity, which landed on the other side of the planet.`,
};
const RoverCard = ({ name }) => {
  return (
    <Link href={`/rovers/[${name}]`} as={`/rovers/${name}`}>
      <a>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="h-64 w-64 mx-auto mt-6"
            src={`/images/${name}.jpg`}
            alt={`${name} rover`}
          ></img>
          <div className="mt-6 mx-6 mb-6">
            <div className="text-3xl mx-auto justify-center w-full uppercase text-center mx-auto text-gray-800 w-full">
              {name}
            </div>
            <p className="text-justify text-xl text-gray-600 mb-4">
              {roverDescriptions[name]}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default RoverCard;
