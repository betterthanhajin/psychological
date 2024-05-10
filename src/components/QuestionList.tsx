import { Link } from "react-router-dom";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export default function QuestionList() {
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
        <div
          className="loader"
          style={{ margin: "10px 0", display: "none" }}
        ></div>
        <div>
          <ul
            style={{
              listStyle: "none",
              color: "white",
              fontWeight: "bolder",
              lineHeight: "30px",
            }}
          >
            <div
              style={{
                color: "white",
                fontWeight: "bolder",
                marginBottom: "15px",
              }}
            >
              질문 01 - 평행세계에서 당신이 전혀 다른 직업을 가졌다면
              어떤 직업을 가지고 있을까요?
            </div>
            <li
              style={{
                border: "1px solid white",
                marginBottom: "15px",
                padding: "5px",
              }}
            >
              <Link to="/question02">
                <button
                  style={{
                    width: "100%",
                    height: "27px",
                    color: "white",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontWeight: "bolder",
                    fontSize: "15px",
                  }}
                >
                  예술가
                </button>
              </Link>
            </li>
            <li
              style={{
                border: "1px solid white",
                marginBottom: "15px",
                padding: "5px",
              }}
            >
              <Link to="/question02">
                <button
                  style={{
                    width: "100%",
                    height: "27px",
                    color: "white",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontWeight: "bolder",
                    fontSize: "15px",
                  }}
                >
                  과학자
                </button>
              </Link>
            </li>
            <li
              style={{
                border: "1px solid white",
                marginBottom: "15px",
                padding: "5px",
              }}
            >
              <Link to="/question02">
                <button
                  style={{
                    width: "100%",
                    height: "27px",
                    color: "white",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontWeight: "bolder",
                    fontSize: "15px",
                  }}
                >
                  탐험가
                </button>
              </Link>
            </li>
            <li
              style={{
                border: "1px solid white",
                marginBottom: "15px",
                padding: "5px",
              }}
            >
              <Link to="/question02">
                <button
                  style={{
                    width: "100%",
                    height: "27px",
                    color: "white",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontWeight: "bolder",
                    fontSize: "15px",
                  }}
                >
                  교육자
                </button>
              </Link>
            </li>
            <li
              style={{
                border: "1px solid white",
                marginBottom: "15px",
                padding: "5px",
              }}
            >
              <Link to="/question02">
                <button
                  style={{
                    width: "100%",
                    height: "27px",
                    color: "white",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontWeight: "bolder",
                    fontSize: "15px",
                  }}
                >
                  기업가
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
