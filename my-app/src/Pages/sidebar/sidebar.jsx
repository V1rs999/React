import "./sidebar.css";
import materials from "../../data/materials.json";
function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <nav>
          <ul>
            {materials.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Sidebar;
