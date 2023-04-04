import React, { useState } from "react";
import styles from "./AboutUs.module.css";
import StaffModal from "./StaffModal";
import { useTranslation } from "react-i18next";
import SelectLanguage from "./SelectLanguage";
import HamburgerMenu from "../../layout/HamburgerMenu";

const AboutUs = () => {
  const { t } = useTranslation(["common"]);
  const [open, setOpen] = useState(false);

  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.hamburgerMenu}>
        <HamburgerMenu />
      </div>
      <div className={styles.language}>
        <SelectLanguage />
      </div>
      <div className={styles.aboutUs}>
        <h2>WOPR</h2>
        <p>{t("aboutUs.content")}</p>
        <a onClick={() => setOpen(true)}>{t("aboutUs.staff")}</a>
        <StaffModal closeModal={closeModalHandler} openModal={open} />
      </div>
    </>
  );
};

export default AboutUs;
