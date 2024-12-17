import React from "react";
import LineStart from "./LineStart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section
      className=" d-flex flex-column text-center pt-5  bg-info"
      style={{
        padding: "100px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <div
        style={{
          textTransform: "uppercase",
          color: "white",
        }}
      >
        <h2 className="fs-1">ABOUT</h2>
      </div>
      <LineStart color={"white"} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          color: "white",
        }}
      >
        <p
          style={{
            flex: " 0 0 300px",
            height: 200,
          }}
        >
          Freelancer is a free bootstrap theme created by Start Bootstrap. The
          download includes the complete source files including HTML, CSS, and
          JavaScript as well as optional SASS stylesheets for easy
          customization.
        </p>
        <p
          style={{
            flex: "0 0 300px",
            height: 200,
          }}
        >
          You can create your own custom avatar for the masthead, change the
          icon in the dividers, and add your email address to the contact form
          to make it fully functional!
        </p>
      </div>
      <div>
        <button
          style={{
            borderRadius: 5,
            border: "white",
            padding: 20,
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            icon={faDownload}
            style={{ marginRight: "8px", fontSize: 20 }}
          />
          Free DownLoad
        </button>
      </div>
    </section>
  );
}
