import React from "react";

const HeadingTexts = (props) => {
  return (
    <div>
      <h1
        style={{
          color: "#BDBDBD",
          fontFamily: "Roboto",
          fontWeight: "300",
          size: [props.lighttextsize],
        }}
      >
        {props.lighttext}
      </h1>
      <h2
        style={{
          color: "#333333",
          fontFamily: "Roboto",
          fontWeight: "700",
          size: [props.boldtextsize],
        }}
      >
        {props.boldtext}
      </h2>
    </div>
  );
};

export default HeadingTexts;
