import { Suspense } from "react";
import { useInView } from "react-intersection-observer";
import Header from "./components/header/Header";
import AboutUs from "./components/content/AboutUs";
import Posts from "./components/content/Posts";
import Sponsors from "./components/content/Sponsors";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";

const App = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
  });

  console.log(inView);

  return (
    <Suspense fallback={null}>
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

// tutaj w app dodaje hamburgera on jest tylko widoczny gdy jest widoczne cos z contentu i easy zrobione

export default App;
