import React, { useState } from "react";
import styles from "./AboutUs.module.css";
import StaffModal from "./StaffModal";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation(["common"]);
  const [open, setOpen] = useState(false);

  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <div className={styles.aboutUs}>
      <h2>WOPR</h2>
      <p>{t("aboutUs.content")}</p>
      <a onClick={() => setOpen(true)}>Zarząd</a>
      <StaffModal closeModal={closeModalHandler} openModal={open} />
    </div>
  );
};

export default AboutUs;
