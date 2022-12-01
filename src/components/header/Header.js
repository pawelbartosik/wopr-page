import CarouselHeader from "./CarouselHeader";
import SelectLanguage from "./SelectLanguage";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.background}>
      <CarouselHeader />
      <SelectLanguage />
    </header>
  );
};

export default Header;
