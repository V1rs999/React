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

  const removeElement = (event) => {
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
  const renametitle = (event) => {
    const checkboxElement =
      event.target.parentNode.parentNode.getElementsByClassName("checkbox")[0];
    checkboxElement.disabled = true;
    let title =
      event.target.parentNode.parentNode.getElementsByClassName("title")[0];

    // Встановлюємо contentEditable на true
    title.setAttribute("contentEditable", "true");

    // Додаємо обробник події для відстеження клавіші "Enter"
    title.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        // Встановлюємо contentEditable на false при натисканні "Enter"
        title.setAttribute("contentEditable", "false");
        checkboxElement.disabled = false;
      }
    });
  };

  return (
    <>
      {visible && (
        <li className={classes.join(" ")}>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              checked={checked}
              onChange={updateStatus}
            />
            <span className="title">{title}</span>
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
