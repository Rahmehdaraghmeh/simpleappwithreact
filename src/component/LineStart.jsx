import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faStar } from "@fortawesome/free-solid-svg-icons"; 
import HorizontalLine from "./HorizontalLine;";

export default function LineStart({color}) {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <HorizontalLine color={color} thickness="4px" />
      <div>

        <FontAwesomeIcon
          icon={faStar}
          size="2x"
          color={color}
          style={{
            margin: "0px",
            paddingLeft: `5px`,
            paddingTop: "0px",
            // paddingLeft: `5px`,
            paddingRight:'5px'
          }}
        />
      </div>
      <HorizontalLine color={color} thickness="4px" />
    </div>
  );
}
