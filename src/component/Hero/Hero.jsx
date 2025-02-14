import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, i am Deepa GT</h1>
        <p className={styles.description}>
          I am pursuing Engineering(CSE)in VTU-Belgum University, I am holding the certificate of web development with special tools like 
          react.js and Aspiring to secure a Software Engineer role with a reputed organisation that fosters continuous learing ,Skill development 
          and career advancement. 
        </p>
        <a href="mailto:deepagt445@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("../hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};