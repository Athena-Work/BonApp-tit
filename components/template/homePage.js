import Banner from "../modules/banner";

//Style
import styles from "./homePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner />
    </div>
  );
};
export default HomePage;
