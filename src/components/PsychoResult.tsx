import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import answer01 from "../image/answer01.png";
import share from "../image/share.png";

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
          style={{ marginLeft: "40px", background: "#f59cdf", opacity: "0.8" }}
        >
          <img src={answer01} width={200} height={200}></img>
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
              <span style={{ color: "deeppink" }}>
                번화한 도시 중심부의 예술가!!
                <br />
              </span>
              대담하고 사교적인 당신은 도시의 에너지 속에서 활기를 얻으며,
              집에서 화려한 예술 작품을 만들지 않을 때는 하이킹을 즐깁니다.
              현대적인 건축물이 가득한 생동감 넘치는 도시 생활이 당신의 예술적
              피난처를 둘러싸고 있습니다.
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
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
