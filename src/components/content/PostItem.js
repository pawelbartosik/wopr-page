import React from "react";
import styles from "./Posts.module.css";

const PostItem = (props) => {
  return (
    <div className={styles.postItem}>
      <div className={styles.imgContainer}>
        <img src={props.imgSrc} alt={props.title} />
      </div>
      <div className={styles.contentContainer}>
        <h3>{props.title}</h3>
        <p>{props.paragraph}</p>
        <a>Zobacz sobie</a>
      </div>
    </div>
  );
};

export default PostItem;
