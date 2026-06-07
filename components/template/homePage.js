import Banner from "../modules/banner";
import WhyUs from "../modules/whyUs";

//Style
import styles from "./homePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <WhyUs />
    </div>
  );
};
export default HomePage;
