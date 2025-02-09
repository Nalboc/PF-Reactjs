import { SpinnerInfinity } from "spinners-react";
import "./Loader.css";
export default function Loader() {
  return (
    <div className="loader-container">
      <SpinnerInfinity
        size={90}
        thickness={180}
        speed={180}
        color="rgba(57, 128, 172, 1)"
        secondaryColor="rgba(172, 58, 57, 0)"
      />
    </div>
  );
}
