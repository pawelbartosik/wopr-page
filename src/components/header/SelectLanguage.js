import React from "react";
import { Select } from "antd";
import styles from "./SelectLanguage.module.css";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SelectLanguage = () => {
  return (
    <>
      <Select
        className={styles.selectLanguage}
        defaultValue="pl"
        placement="bottomRight"
        dropdownStyle={{
          backgroundColor: "transparent",
        }}
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: "pl",
            label: "Polski",
            // style: {
            //   color: "red",
            //   background: "rgb(255,255,255)",
            //   background:
            //     "linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(255,0,0,1) 100%)",
            // },
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
    </>
  );
};

export default SelectLanguage;
