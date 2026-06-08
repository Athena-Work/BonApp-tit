import MenuPage from "@/components/templates/menuPage";

const Menu = ({ menuItems }) => {
  return (
    <>
      <MenuPage data={menuItems} />
    </>
  );
};
export default Menu;

export async function getStaticProps() {
  const data = await fetch("http://localhost:3001/data");
  const res = await data.json();
  return {
    props: {
      menuItems: res,
      revalidate: 10,
    },
  };
}
