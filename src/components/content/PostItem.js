import React from "react";
import styles from "./Posts.module.css";
import { useTranslation } from "react-i18next";
import { ReactComponent as FacebookSvg } from "../../assets/facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/instagram.svg";

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
        <div>
          <p className={styles.checkParagraph}>{t("posts.button")}</p>
          <div className={styles.svgContainer}>
            <FacebookSvg className={styles.svg} />
            <InstagramSvg className={[styles.svg, styles.svgIg].join(" ")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
