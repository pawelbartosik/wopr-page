import React, { useState } from "react";
import styles from "./AboutUs.module.css";
import StaffModal from "./StaffModal";

const AboutUs = () => {
  const [open, setOpen] = useState(false);

  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <div className={styles.aboutUs}>
      <h2>WOPR</h2>
      <p>
        WOPR jest specjalistycznym stowarzyszeniem o zasięgu ogólnokrajowym,
        powstałym na podstawie zarządzenia nr 74 Przewodniczącego Głównego
        Komitetu Kultury Fizycznej z dnia 11 kwietnia 1962 roku, uzyskało
        osobowość prawną 9 października 1967 roku na podstawie decyzji Ministra
        Spraw Wewnętrznych. Jednostki WOPR są jednostkami współpracującymi z
        systemem Państwowego Ratownictwa Medycznego.
      </p>
      <a onClick={() => setOpen(true)}>Zarząd</a>
      <StaffModal closeModal={closeModalHandler} openModal={open} />
    </div>
  );
};

export default AboutUs;
