import React from "react";

const HorizontalLine = ({ color = "black", thickness = "1px" }) => {
  return (
    <div
      style={{ width:`100px`,
        borderTop: `${thickness} solid ${color}`,padding:0
        // marginLeft:`530px`
      }}
    ></div>
  );
};

export default HorizontalLine;
