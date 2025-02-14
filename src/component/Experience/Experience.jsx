import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skills.imageSrc)} alt={skills.title} />
                </div>
                <p>{skills.title}</p>
              </div>
            );
          })}
        </div>
        <div>
          <p>Fresher , i am eager to learn new conpects and I can learn new things fastly 
               i can give full contribution for my work 
          </p>
        </div>
      </div>
    </section>
  );
};