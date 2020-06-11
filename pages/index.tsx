import RoverCard from "../components/rover-card";
export default function Home() {
  return (
    <section className="flex flex-col flex-grow">
      <h1 className="text-4xl text-gray-800 text-center my-6 mx-auto">
        Select a Rover
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mx-auto">
        <RoverCard name="curiosity" />
        <RoverCard name="opportunity" />
        <RoverCard name="spirit" />
      </div>
    </section>
  );
}
