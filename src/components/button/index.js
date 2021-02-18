import React from "react";
import Button from "react-bootstrap/Button";
import "./styles.css";

export default function Btn({ children, type }) {
  const styleClasses = "text-uppercase mr-4 " + type;
  return <Button className={styleClasses}>{children}</Button>;
}
