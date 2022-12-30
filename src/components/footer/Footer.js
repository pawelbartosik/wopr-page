import React from "react";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { ReactComponent as FacebookSvg } from "../../assets/facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/instagram.svg";

const Footer = () => {
  const { t } = useTranslation(["common"]);
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className={styles.footer}>
      <h2>{t("followUs.title")}</h2>
      <div className={styles.svgContainer}>
        <FacebookSvg className={styles.svg} />
        <InstagramSvg className={[styles.svg, styles.svgIg].join(" ")} />
      </div>
      {/* <small>&copy; Copyright 2022-{currentYear}, Paweł Bartosik</small> */}
    </div>
  );
};

export default Footer;
