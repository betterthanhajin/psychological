import { Link } from "react-router-dom";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export default function PsycholResult() {
  return (
    <>
      <BackgroundBeams />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-56%, -50%)",
        }}
      >
        <div>aaaa</div>
      </div>
    </>
  );
}
