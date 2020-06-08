import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1>Mars Rover Photos</h1>
      <aside>
        <h3></h3>
        <p>These are photos from</p>
      </aside>
      <section name="Rover Selection">
        <h2>Choose a rover</h2>
        <div>
          <Link href="/rovers/[roverId]" as="/rovers/curiosity">
            <a>
              <img src="/curiosity-rover.jpeg"></img>
              <span>Curiosity</span>
            </a>
          </Link>
          <Link href="/rovers/[roverId]" as="/rovers/opportunity">
            <a>
              <img src="/opportunity-rover.jpeg"></img>
              <span>Opportunity</span>
            </a>
          </Link>
          <Link href="/rovers/[roverId]" as="/rovers/spirit">
            <a>
              <img src="/spirit-rover.jpg"></img>
              <span>Spirit</span>
            </a>
          </Link>
        </div>
      </section>
    </section>
  );
}
