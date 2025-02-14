import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:deepagt445@email.com">deepagt445@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl(".assets/Contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/Deepa GT">linkedin.com/Deepa GT</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Deepa-GT">github.com/Deepa-GT</a>
        </li>
      </ul>
    </footer>
  );
};