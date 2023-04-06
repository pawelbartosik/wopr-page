import { Suspense } from "react";
import { useInView } from "react-intersection-observer";
import Header from "./components/header/Header";
import AboutUs from "./components/content/AboutUs";
import Posts from "./components/content/Posts";
import Sponsors from "./components/content/Sponsors";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";
import HamburgerMenu from "./layout/HamburgerMenu";

const App = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.15,
  });

  return (
    <Suspense fallback={null}>
      <HamburgerMenu hamburgerVisible={inView} />
      <Header />
      <div ref={ref} className={styles.content}>
        <AboutUs />
        <Posts />
        <Sponsors />
        <Footer />
      </div>
    </Suspense>
  );
};

// funkcjonalnosc anchorow

export default App;
