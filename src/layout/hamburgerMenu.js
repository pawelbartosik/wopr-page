import { slide as BurgerMenu } from "react-burger-menu";
// import { FaBars } from "react-icons/fa";

const MyBurgerMenu = () => {
  const menuStyles = {
    bmMenu: {
      zIndex: 1000,
      width: 20,
      height: 20,
    },
  };

  return (
    <BurgerMenu
      styles={menuStyles}
      //   w devtoolsach znalazłem burgera

      //   customBurgerIcon={
      //     <FaBars style={{ color: "red", width: "20px", height: "20px" }} />
      //   }
    >
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>
    </BurgerMenu>
  );
};

export default MyBurgerMenu;
