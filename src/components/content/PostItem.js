import React from "react";
import styles from "./Posts.module.css";
import { useTranslation } from "react-i18next";

const PostItem = (props) => {
  const { t } = useTranslation(["common"]);

  return (
    <div className={styles.postItem}>
      <div className={styles.imgContainer}>
        <img src={props.imgSrc} alt={props.title} />
      </div>
      <div className={styles.contentContainer}>
        <h3>{t(props.title)}</h3>
        <p>{t(props.paragraph)}</p>
        <a>{t("posts.button")}</a>
      </div>
    </div>
  );
};

export default PostItem;
