import Link from "next/link";
import Image from "next/image";

//Style
import styles from "./banner.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.rightSide}>
        <h2>Bon Appétit Food</h2>
        <div>Food Delivery and Takeout!</div>
        <span>
          Bon Appétit Food is an online food ordering and delivery platform.
          Launched by Uber in 2014 , Meals are delivered by couries using cars,
          scooters,bikes,or not foot.
        </span>
        <Link href={"/menu"}>See All Meals</Link>
      </div>
      <div className={styles.leftSide}>
        <Image
          src={"/images/banner.png"}
          width={450}
          height={300}
          alt="Banner"
        />
      </div>
    </div>
  );
}
export default Banner;
