import { useState } from "react";
import "./item.css";
function Item({ title, id, status, setUnfinishedCount, unfinishedCount }) {
  const [checked, setChecked] = useState(status);
  const [visible, setVisible] = useState(true);
  const classes = ["todo"];

  if (checked) {
    classes.push("status");
  }

  const updateStatus = (event) => {
    setChecked(!checked);
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    storedTodos.map((el) => {
      if (el.id === id) {
        el.status = !checked
          ? setUnfinishedCount(--unfinishedCount)
          : setUnfinishedCount(++unfinishedCount);
        el.status = !checked;
      }
      return true;
    });
    localStorage.setItem("tasks", JSON.stringify(storedTodos));
  };

  const removeElement = () => {
    setVisible((prev) => !prev);
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    let removeTodos = storedTodos.filter((item) => {
      if (item.id !== id) {
        return true;
      }
      return false;
    });
    storedTodos.map((el) => {
      if (el.id === id) {
        if (el.status === false) {
          setUnfinishedCount(unfinishedCount - 1);
        }
      }
      return true;
    });
    localStorage.setItem("tasks", JSON.stringify(removeTodos));
  };
  const renametitle = () => {
    checked ? setChecked(false) : setChecked(true);
    console.log("click");
  };
  return (
    <>
      {visible && (
        <li className={classes.join(" ")}>
          <label>
            <input type="checkbox" checked={checked} onChange={updateStatus} />
            <span>{title}</span>
            <div className="wrapper">
              <img
                onClick={renametitle}
                src={
                  "https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Edit-01-256.png"
                }
                alt="suka"
              />
              <i className="material-icons red-text" onClick={removeElement}>
                X
              </i>
            </div>
          </label>
        </li>
      )}
    </>
  );
}
export default Item;
