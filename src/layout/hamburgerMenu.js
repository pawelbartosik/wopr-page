import { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const burgerClass = !isMenuClicked
    ? "burger-bar unclicked"
    : "burger-bar clicked";
  const menuClass = !isMenuClicked ? "hidden" : "visible";

  return (
    <div>
      <nav>
        <div className="burgerMenu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>
      <div className={`background ${menuClass}`}></div>
      <div className={`menu ${menuClass}`}>
        <a>Władze</a>
        <a>Kontakt</a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
