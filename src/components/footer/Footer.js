import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as FacebookSvg } from "../../assets/facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2>Obserwuj nas</h2>
      <div className={styles.svgContainer}>
        <FacebookSvg className={styles.svg} />
        <InstagramSvg className={[styles.svg, styles.svgIg].join(" ")} />
      </div>
    </div>
  );
};

export default Footer;
