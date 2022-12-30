import CarouselHeader from "./CarouselHeader";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.background}>
      <CarouselHeader />
    </header>
  );
};

export default Header;
