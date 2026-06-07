import Banner from "../modules/banner";
import WhoWeAre from "../modules/whoWeAre";
import WhyUs from "../modules/whyUs";

//Style
import styles from "./homePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <WhyUs />
      <WhoWeAre />
    </div>
  );
};
export default HomePage;
