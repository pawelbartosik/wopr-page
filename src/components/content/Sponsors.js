import styles from "./Sponsors.module.css";
import { useTranslation } from "react-i18next";
// sponsors
import s1 from "../../assets/drwal.jpg";
import s2 from "../../assets/mcd.jpg";
import s3 from "../../assets/mcdonalds-vege.jpg";
import s4 from "../../assets/pobrane.png";

const Sponsors = () => {
  const { t } = useTranslation(["common"]);

  return (
    <div className={styles.sponsorsDiv}>
      <h2>{t("sponsors")}</h2>
      <div className={styles.allSponsors}>
        <img src={s1} alt="Nazwa firmy" />
        <img src={s2} alt="Nazwa firmy" />
        <img src={s3} alt="Nazwa firmy" />
        <img src={s4} alt="Nazwa firmy" />
        <img src={s3} alt="Nazwa firmy" />
        <img src={s3} alt="Nazwa firmy" />
        <img src={s3} alt="Nazwa firmy" />
        <img src={s1} alt="Nazwa firmy" />
        <img src={s1} alt="Nazwa firmy" />
        <img src={s1} alt="Nazwa firmy" />
      </div>
    </div>
  );
};

export default Sponsors;
