import React from "react";
import styles from "./StaffModal.module.css";
import { useTranslation } from "react-i18next";

const StaffItem = (props) => {
  const { t } = useTranslation(["common"]);

  return (
    <div className={styles.staffItem}>
      <div className={styles.imgContainer}>
        <img src={props.imgSrc} alt={props.title} />
      </div>
      <div className={styles.contentContainer}>
        <h3>{props.title}</h3>
        <p>{t(props.paragraph)}</p>
      </div>
    </div>
  );
};

export default StaffItem;
