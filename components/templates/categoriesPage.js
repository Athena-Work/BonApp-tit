import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
//Style
import styles from "./categoriesPage.module.css";
import Card from "../modules/card";

const CategoriesPage = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: "", time: "" });
  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      query,
    });
  };
  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select
            value={query.difficulty}
            name="difficulty"
            onChange={changeHandler}>
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select value={query.time} name="time" onChange={changeHandler}>
            <option value="">Cooking Time</option>
            <option value="more">More than 30 minutes</option>
            <option value="less">Less than 30 minutes</option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>
      </div>
      <div className={styles.cards}>
        {!data.length ? (
          <Image
            src="/images/search.png"
            alt="category"
            width={300}
            height={300}
          />
        ) : (
          data.map((food) => <Card key={food.id} data={food} />)
        )}
      </div>
    </div>
  );
};
export default CategoriesPage;
