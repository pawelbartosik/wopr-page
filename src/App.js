import { Suspense } from "react";
import Header from "./components/header/Header";
import AboutUs from "./components/content/AboutUs";
import Posts from "./components/content/Posts";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";

const App = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <div className={styles.content}>
        <AboutUs />
        <Posts />
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
