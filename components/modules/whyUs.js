import Image from "next/image";

//Components
import Fast from "../icons/Fast.js";
import Food from "../icons/Food.js";
import Choice from "../icons/Choice.js";
import Clock from "../icons/Clock.js";

//Style
import styles from "./whyUs.module.css";

const whyUs = () => {
  return (
    <div className={styles.container}>
      <h3>Why us?</h3>
      <div className={styles.subContainer}>
        <div>
          <Fast />
          <p>Fast</p>
        </div>
        <div>
          <Food />
          <p>Best Resturants</p>
        </div>
        <div>
          <Choice />
          <p>Your Choice</p>
        </div>

        <div>
          <Clock />
          <p>24-7</p>
        </div>
      </div>
    </div>
  );
};
export default whyUs;
