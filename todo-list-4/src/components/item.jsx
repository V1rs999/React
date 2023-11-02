import { useState } from "react";

function Item({ title, id, status, setUnfinishedCount, unfinishedCount }) {
  const [checked, setChecked] = useState(status);
  const [visible, setVisible] = useState(true);
  const classes = ["todo"];

  if (checked) {
    classes.push("status");
  }

  const updateStatus = () => {
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
    localStorage.setItem("tasks", JSON.stringify(removeTodos));
  };

  return (
    <>
      {visible && (
        <li className={classes.join(" ")} id={id}>
          <label>
            <input type="checkbox" checked={checked} onChange={updateStatus} />
            <span>{title}</span>
            <i className="material-icons red-text" onClick={removeElement}>
              X
            </i>
          </label>
        </li>
      )}
    </>
  );
}
export default Item;
