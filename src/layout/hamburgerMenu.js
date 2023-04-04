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
  const menuClass = !isMenuClicked ? "menu hidden" : "menu visible";

  return (
    <div>
      <nav>
        <div className="burgerMenu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>
      <div className={menuClass}></div>
    </div>
  );
};

export default HamburgerMenu;
