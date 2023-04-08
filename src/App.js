import { Suspense, useState } from "react";
import { useInView } from "react-intersection-observer";
import Header from "./components/header/Header";
import AboutUs from "./components/content/AboutUs";
import Posts from "./components/content/Posts";
import Sponsors from "./components/content/Sponsors";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";
import HamburgerMenu from "./layout/HamburgerMenu";

const App = () => {
  const [openAboutUsModal, setOpenAboutUsModal] = useState(false);

  const [ref, inView, entry] = useInView({
    threshold: 0.15,
  });

  return (
    <Suspense fallback={null}>
      <HamburgerMenu
        hamburgerVisible={inView}
        openAboutUs={setOpenAboutUsModal}
      />
      <Header />
      <div ref={ref} className={styles.content}>
        <AboutUs open={openAboutUsModal} setOpen={setOpenAboutUsModal} />
        <Posts />
        <Sponsors />
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
