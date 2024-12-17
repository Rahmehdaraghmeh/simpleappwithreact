import React, { useState } from "react";
import LineStart from "./LineStart";

export default function Contacts() {
  return (
    <section
      style={{
        padding: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <div style={{ textTransform: "uppercase", color: "#121254" }}>
        <h2 className="fs-1">Contact Me</h2>
      </div>
      <LineStart color={"#121254"} />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "20px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        {/* Full Name */}
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            style={inputStyle}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            style={inputStyle}
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="number">Phone Number</label>
          <input
            type="text"
            name="number"
            id="number"
            style={inputStyle}
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="5"
            rows="5"
            style={inputStyle}
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          {" "}
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#18BC9C",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              borderRadius: "5px",
            }}
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px 0px",
  border: "none",
  borderBottom: "2px solid #ccc",
  fontSize: "16px",
  outline: "none",
  background: "none",
};
