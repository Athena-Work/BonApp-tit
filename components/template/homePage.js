import Banner from "../modules/banner";
import Company from "../modules/company";
import HowToOrder from "../modules/howToOrder";
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
      <Company />
      <HowToOrder />
    </div>
  );
};
export default HomePage;
