import React from "react";
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";
import five from "../assets/images/5.png";
import six from "../assets/images/6.png";
import LineStart from "./LineStart";

export default function Portfolio() {
  return (
    <section
      className=" d-flex flex-column text-center pt-5 "
      style={{
        padding: "100px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }} // تحديد المسافة بين العناصر}}
    >
      <div style={{ textTransform: "uppercase ", color: "#121254" }}>
        <h2 className="fs-1">PORTFOLIO</h2>
      </div>
      <LineStart color={"#121254"} />
      <div
        style={{
          display: "flex",
          columnGap: "5px",
          rowGap: "20px",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div style={sty}>
          <img src={one} alt="one" width={300} />
        </div>
        <div style={sty}>
          <img src={two} alt="two" width={300} />
        </div>
        <div style={sty}>
          <img src={three} alt="three" width={300} />
        </div>
        <div style={sty}>
          <img src={four} alt="four" width={300} />
        </div>
        <div style={sty}>
          <img src={five} alt="five" width={300} />
        </div>
        <div style={sty}>
          <img src={six} alt="six" width={300} />
        </div>
      </div>
    </section>
  );
}
const sty={
  flex: " 1 1 33% "
}
