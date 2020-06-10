import RoverCard from "../components/rover-card";
export default function Home() {
  return (
    <section className="flex flex-col flex-grow">
      <h1>Select a Rover</h1>
      <div className="grid grid-cols-3 gap-4">
        <RoverCard name="curiosity" />
        <RoverCard name="opportunity" />
        <RoverCard name="spirit" />
      </div>
    </section>
  );
}
