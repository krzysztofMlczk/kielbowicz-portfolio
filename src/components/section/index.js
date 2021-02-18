import React from "react";

export default function Section({ children, imgUrl }) {
  const style = {
    background: `url(${imgUrl}) no-repeat 0% 50%`,
    maxWidth: "2000px",
    position: "relative",
    margin: "0 auto",
  };

  return <section style={style}>{children}</section>;
}
