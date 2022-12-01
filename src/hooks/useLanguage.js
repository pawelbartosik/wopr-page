import { useState } from "react";

const useLanguage = () => {
  const [language, setLanguage] = useState("pl");

  const setLanguageHandler = (value) => {
    console.log("hook!");
    console.log(value);
    setLanguage(value);
  };

  return {
    language,
    setLanguage: setLanguageHandler,
  };
};

export default useLanguage;
