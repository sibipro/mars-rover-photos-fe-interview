import { useRouter } from "next/router";
import { useState } from "react";
import Button from "@sibipro/caffeine/components/Button";

const RoverDetail = () => {
  const router = useRouter();
  const [viewManifest, setViewManifest] = useState(false);

  const handleToggle = () => {
    setViewManifest(!viewManifest);
  };
  const { roverId } = router.query;
  return (
    <section>
      <h1>
        Rover Detail {roverId} View Manifest {viewManifest}
      </h1>

      <Button color="primary" variant="contained" onClick={handleToggle}>
        {viewManifest ? "Hide" : "Show"} Manifest
      </Button>
    </section>
  );
};

export default RoverDetail;
