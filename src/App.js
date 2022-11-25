import Header from "./components/header/Header";
import AboutUs from "./components/content/AboutUs";
import Posts from "./components/content/Posts";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <AboutUs />
        <Posts />
        <Footer />
      </div>
    </div>
  );
};

export default App;
