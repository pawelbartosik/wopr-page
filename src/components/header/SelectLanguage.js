import React, { useEffect } from "react";
import { Select } from "antd";
import styles from "./SelectLanguage.module.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const SelectLanguage = () => {
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("pl");
    }
  }, []);

  const handleLanguageChange = (len) => {
    i18n.changeLanguage(len);
  };

  return (
    <div className={styles.bar}>
      <h2>WOPR</h2>
      <Select
        className={styles.selectLanguage}
        defaultValue="pl"
        placement="bottomRight"
        dropdownStyle={{
          fontFamily: "Quicksand",
          letterSpacing: "2px",
        }}
        style={{
          width: 120,
        }}
        onChange={handleLanguageChange}
        options={[
          {
            value: "pl",
            label: "Polski",
          },
          {
            value: "en",
            label: "English",
          },
          {
            value: "de",
            label: "Deutsch",
          },
        ]}
      />
    </div>
  );
};

export default SelectLanguage;
