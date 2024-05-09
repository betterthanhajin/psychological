import { Link } from "react-router-dom";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export default function QuestionList03() {
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
              질문 04 -
              평행세계에서 당신이 가장 중요하게 생각하는 가치는 무엇일까요?
            </div>
            <li
              style={{
                border: "1px solid white",
                marginBottom: "15px",
                padding: "5px",
              }}
            >
              <Link to="/psycholResult">
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
                  가족과 친구
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
              개인의 성장과 자기계발
            </li>
            <li
              style={{
                border: "1px solid white",
                marginBottom: "15px",
                padding: "5px",
              }}
            >
              사회적 영향력과 변화
            </li>
            <li
              style={{
                border: "1px solid white",
                marginBottom: "15px",
                padding: "5px",
              }}
            >
              창의성과 혁신
            </li>
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
                  다음
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
