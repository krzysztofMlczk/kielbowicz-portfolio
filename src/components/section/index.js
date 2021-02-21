import React from "react";
import "./styles.css";

export default function Section({ children, imgUrl, padding }) {
  const style = {
    background: `url(${imgUrl}) no-repeat 0% 50%`,
    padding: padding ? "8rem 5rem" : null,
  };

  return (
    <section className="default-section" style={style}>
      {children}
    </section>
  );
}
