import React from "react";
import styles from "./AboutUs.module.css";
import StaffModal from "./StaffModal";
import { useTranslation } from "react-i18next";
import SelectLanguage from "./SelectLanguage";

const AboutUs = (props) => {
  const { t } = useTranslation(["common"]);

  const closeModalHandler = () => {
    props.setOpen(false);
  };

  return (
    <>
      <div className={styles.language}>
        <SelectLanguage />
      </div>
      <div className={styles.aboutUs}>
        <h2>WOPR</h2>
        <p>{t("aboutUs.content")}</p>
        <a onClick={() => props.setOpen(true)}>{t("aboutUs.staff")}</a>
        <StaffModal closeModal={closeModalHandler} openModal={props.open} />
      </div>
    </>
  );
};

export default AboutUs;
