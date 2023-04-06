import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./HamburgerMenu.css";

const HamburgerMenu = (props) => {
  const { t } = useTranslation(["common"]);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const hamburgerVisible = props.hamburgerVisible ? "visible" : "hidden";

  const updateMenuHandler = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const closeMenuHandler = () => {
    setIsMenuClicked(false);
  };

  const burgerClass = !isMenuClicked
    ? "burger-bar unclicked"
    : "burger-bar clicked";
  const menuClass = !isMenuClicked ? "hidden" : "visible";

  return (
    <div>
      <nav className={hamburgerVisible}>
        <div className="burgerMenu" onClick={updateMenuHandler}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>
      <div
        className={`background ${menuClass}`}
        onClick={closeMenuHandler}
      ></div>
      <div className={`menu ${menuClass}`}>
        <a>{t("aboutUs.staff")}</a>
        {/* tutaj kontakt trzeba zrobic tak samo jak wyzej, zeby jezyki dzialaly. Tak samo w tym modalu co zrobiles "kontakt" jest na sztywno */}
        <a>Kontakt</a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
