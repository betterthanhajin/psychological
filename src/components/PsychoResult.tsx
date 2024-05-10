import { Link } from "react-router-dom";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import answer01 from "../image/answer01.png";
import answer03 from "../image/answer03.png";
// import share from "../image/share.png";

export default function QuestionList03() {
  const getUserType = () => sessionStorage.getItem("answer01");

  const imgResult = () => {
    const userType = getUserType();
    switch (userType) {
      case "cityArtist":
        return <img src={answer01} width={200} height={200}></img>;
      case "futureScientist":
        return <img src={answer03} width={200} height={200}></img>;
      case "natureExplorer":
        return <img src={answer01} width={200} height={200}></img>;
      case "countryEducator":
        return <img src={answer03} width={200} height={200}></img>;
    }
  };
  const renderResult = () => {
    const userType = getUserType();
    switch (userType) {
      case "cityArtist":
        return (
          <p>
            번화한 도시 중심부의 예술가: 대담하고 사교적인 당신은 도시의 에너지
            속에서 활기를 얻으며, 집에서 화려한 예술 작품을 만들지 않을 때는
            하이킹을 즐깁니다. 현대적인 건축물이 가득한 생동감 넘치는 도시
            생활이 당신의 예술적 피난처를 둘러싸고 있습니다.
          </p>
        );
      case "futureScientist":
        return (
          <p>
            미래적인 도시의 과학자: 조용하고 사색적인 당신은 첨단 기술로 가득 찬
            도시에 있는 하이테크 아파트에서 살고 있습니다. 당신의 일상은 과학적
            연구와 여유로운 독서 및 글쓰기에 바쳐집니다.
          </p>
        );
      case "natureExplorer":
        return (
          <p>
            자연 속 탐험가: 대담하고 모험적인 당신은 산이나 바다가 있는 곳에서
            살며, 등산이나 다이빙을 즐깁니다. 당신의 집은 아름다운 자연 풍경
            속에 있는 아늑한 오두막이나 해변가 방갈로입니다.
          </p>
        );
      case "countryEducator":
        return (
          <p>
            평화로운 시골 마을의 교육자: 신중하고 체계적인 당신은 정원이 있는
            시골 코티지에서 평화를 느끼며, 원예와 요리에 몰두합니다. 마을은
            평화롭고 가족 및 친구들을 소중히 여기는 긴밀한 커뮤니티를
            강조합니다.
          </p>
        );
    }
  };
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
          style={{ marginLeft: "40px", background: "#f59cdf", opacity: "0.8" }}
        >
          {imgResult()}
        </div>
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
              {renderResult()}
              {/* <span style={{ color: "deeppink" }}>
                번화한 도시 중심부의 예술가!!
                <br />
              </span>
              대담하고 사교적인 당신은 도시의 에너지 속에서 활기를 얻으며,
              집에서 화려한 예술 작품을 만들지 않을 때는 하이킹을 즐깁니다.
              현대적인 건축물이 가득한 생동감 넘치는 도시 생활이 당신의 예술적
              피난처를 둘러싸고 있습니다. */}
            </div>
            <div style={{ padding: "5px" }}>
              <Link to="/">
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
                  다시하기
                </button>
              </Link>
              {/* <button
                style={{
                  width: "87px",
                  height: "27px",
                  background: "white",
                  color: "#ff9ae2",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bolder",
                  marginLeft: "10px",
                  verticalAlign: "middle",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={share} width={20} height={20}></img>
                </div>
              </button> */}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
