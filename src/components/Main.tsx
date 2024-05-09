import { Link } from "react-router-dom";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export default function Main() {
  return (
    <>
      <BackgroundBeams />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            color: "white",
            fontWeight: "bolder",
            fontSize: "20px",
            whiteSpace: "nowrap",
          }}
        >
          평행세계 - 또다른 나
        </div>
        <div className="loader" style={{ margin: "15px 0" }}></div>
        <div style={{ padding: "5px" }}>
          <Link to="/question">
            <button
              style={{
                width: "87px",
                height: "27px",
                background: "white",
                color: "#ff9ae2",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bolder",
              }}
            >
              입장
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
