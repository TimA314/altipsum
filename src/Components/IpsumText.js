import React from "react";
import "./IpsumText.css";

export default function IpsumText(props) {
  return (
    <div className="cont">
      <article>{props.IpsumText}</article>
    </div>
  );
}
