import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <>
      <div
        className="home-container"
        style={{ transform: "translateY(-62px)" }}
      >
        {/* <h1 className="description"></h1> */}
        <div className="home-main">
          {/* <div className="btn-section">
          <Link to="/start">
            <button className="btn start-btn">Let's Start</button>
          </Link>
          <Link to="/tutorials">
            <button className="btn start-btn">Tutorials</button>
          </Link>
        </div> */}

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "8rem",
              transform: "translateX(-50%)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <h3
                style={{
                  color: "white",
                  // width: "12rem",
                  fontFamily: "'arquitecta', sans-serif",
                  // fontStyle: "italic",
                  fontSize: "2.9rem",
                  width: "22rem",
                }}
              >
                YOUR PRACTICE ,
              </h3>
              <h3
                style={{
                  color: "white",
                  fontFamily: "'arquitecta', sans-serif",
                  // fontStyle: "italic",
                  fontSize: "3rem",
                  width: "22rem",
                  // fontFamily: "'Barlow', sans-serif",
                  // fontStyle: "italic",
                  // marginTop: "-0.5rem",
                  // textShadow:
                  //   "0 0 2px white, 0 0 2px white, 0 0 1px white, 0 0 2px white, 0 0 2px white",
                  // "-webkit-font-smoothing": "antialiased",
                }}
              >
                REIMAGINED
              </h3>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              left: "15%",
              top: "13rem",
              // transform: "translate(-50%,-50%)",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "block",
                  width: "1rem",
                  height: "24rem",
                  transform: "rotate(180deg)",
                  borderRadius: "5px",
                  background:
                    "linear-gradient(180deg, rgba(0,255,0,0) 0%, rgba(100,9,101,1) 35%, rgba(0,255,0,1) 100%)",
                  // borderRadius: "5px",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  marginLeft: "1rem",
                  marginTop: "3rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "22rem",
                  }}
                >
                  <h3
                    style={{
                      color: "white",
                      // marginLeft: "4rem",
                      marginTop: "15px",
                    }}
                  >
                    A Yoga AI
                  </h3>
                  <h3
                    style={{
                      color: "white",
                      // marginLeft: "4rem",
                      // marginTop: "15px",
                      color: "#2986b0",
                      // width: "25rem",
                      fontSize: "3rem",
                      fontFamily: "'Barlow', sans-serif",
                      // fontStyle: "italic",
                      textShadow:
                        "0 0 2px #fff, 0 0 2px #fff, 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff",
                      "-webkit-font-smoothing": "antialiased",
                    }}
                  >
                    Trainer
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    marginTop: "1.5rem",
                  }}
                >
                  <Link to="/start" style={{ width: "max-content" }}>
                    <button
                      style={{
                        background: "green",
                        color: "white",
                        paddingRight: "2rem",
                        paddingLeft: "2rem",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        border: "none",
                        borderRadius: "9px",
                        marginLeft: "2rem",
                      }}
                      className=" "
                    >
                      Let's Start
                    </button>
                  </Link>
                  <Link to="/tutorials" style={{ width: "max-content" }}>
                    <button
                      style={{
                        background: "blue",
                        color: "white",
                        paddingRight: "2rem",
                        paddingLeft: "2rem",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        border: "none",
                        borderRadius: "9px",
                      }}
                    >
                      Tutorials
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            src={require("../../utils/images/1191338.jpg").default}
            style={{
              position: "absolute",
              zIndex: "-1",
              objectFit: "cover",
              top: "7rem",
              width: "100vw",
              height: "100vh",
              filter: "brightness(80%)",
            }}
            //   height="650"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
