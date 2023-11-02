import "./main.css";
import materials from "../../data/materials.json";
import Articles from "../../components/Articles";
function Main() {
  return (
    <>
      <section className="main">
        <Articles data={materials} />
      </section>
    </>
  );
}

export default Main;
