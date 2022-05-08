import React from "react";
import styles from "./styles.module.css";
const Inputtag = () => {
  return (
    <div>
      <center>
        <input
          id={styles.input}
          type="text"
          placeholder="Search For Movie Title...."
        />
      </center>
    </div>
  );
};

export default Inputtag;
