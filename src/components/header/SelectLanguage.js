import React from "react";
import { Select } from "antd";
import styles from "./SelectLanguage.module.css";
import background from "../../assets/background2.gif";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SelectLanguage = () => {
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
        onChange={handleChange}
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
