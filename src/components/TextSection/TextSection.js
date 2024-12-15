import React from "react";
import classes from "./TextSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function TextSection() {
  return (
    <div className="container">
      <section className={`bg-success ${classes.summary}`}>
        <h2>Interdimensional Character Explorer</h2>
        <p>
          {" "}
          Dive into the strange and chaotic world of Rick and Morty and discover
          your favorite characters
        </p>
        <p>If you are interested, please go ahead and click the button</p>
        <p>Wubba Lubba Dub Dub</p>
        <FontAwesomeIcon icon={faArrowDown} style={{ fontSize: "2rem" }} />
      </section>
    </div>
  );
}

export default TextSection;
