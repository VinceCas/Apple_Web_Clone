import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  SlidesCard,
  Products,
  Reason,
  Footer,
} from "./components";

const App = () => (
  <Router basename = "/Apple_Web_Clone">
  <div className={`w-full overflow-hidden`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={` bg-white ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>
        <Hero />
      </div>
    </div>

    <div className={`bg-white ${styles.paddingY} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <SlidesCard />
        <Products />
        <Reason />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
