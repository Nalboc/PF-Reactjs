import { SpinnerInfinity } from "spinners-react";
export default function Loader() {
  return (
    <SpinnerInfinity
      size={90}
      thickness={180}
      speed={180}
      color="rgba(57, 128, 172, 1)"
      secondaryColor="rgba(172, 58, 57, 0)"
    />
  );
}
