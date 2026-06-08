import Banner from "../modules/banner";
import Company from "../modules/company";
import Guide from "../modules/guide";
import HowToOrder from "../modules/howToOrder";
import Restrictions from "../modules/restrictions";
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
      <Guide />
      <Restrictions />
    </div>
  );
};
export default HomePage;
