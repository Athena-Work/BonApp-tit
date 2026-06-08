import Card from "../modules/card";

//Style
import style from "./menuPage.module.css";

const MenuPage = ({ data }) => {
  return (
    <div className={style.container}>
      <h2>Menu</h2>
      <div className={style.cards}>
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
export default MenuPage;
