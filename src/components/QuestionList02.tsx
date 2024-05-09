import { Link } from "react-router-dom";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export default function QuestionList02() {
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
              질문 02 - 평행세계의 당신은 어떤 성격의 소유자일까요?
            </div>
            <li
              style={{
                border: "1px solid white",
                marginBottom: "15px",
                padding: "5px",
              }}
            >
              <Link to="/question03">
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
                  대담하고 모험적인
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
              조용하고 사색적인
            </li>
            <li
              style={{
                border: "1px solid white",
                marginBottom: "15px",
                padding: "5px",
              }}
            >
              사교적이고 활발한
            </li>
            <li
              style={{
                border: "1px solid white",
                marginBottom: "15px",
                padding: "5px",
              }}
            >
              신중하고 체계적인
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
