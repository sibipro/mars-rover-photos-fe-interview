import RoverCard from "../components/rover-card";
export default function Home() {
  return (
    <section>
      <h1>Mars Rover Photos</h1>
      <section>
        <h2>Choose a rover</h2>
        <div>
          <RoverCard name="curiosity" />
          <RoverCard name="opportunity" />
          <RoverCard name="spirit" />
        </div>
      </section>
    </section>
  );
}
