import { useState } from "react";
import "./item.css";

function Item({ title, id, status, setUnfinishedCount, unfinishedCount }) {
  const [checked, setChecked] = useState(status);
  const [visible, setVisible] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const classes = ["todo"];

  if (checked) {
    classes.push("status");
  }

  const updateStatus = (event) => {
    setChecked(!checked);
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    storedTodos.map((el) => {
      if (el.id === id) {
        el.status = !checked;
        setUnfinishedCount((prevCount) =>
          !checked ? prevCount - 1 : prevCount + 1
        );
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
      if (el.id === id && el.status === false) {
        setUnfinishedCount((prevCount) => prevCount - 1);
      }
      return true;
    });
    localStorage.setItem("tasks", JSON.stringify(removeTodos));
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const saveTitle = () => {
    setIsEditing(false);
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    storedTodos.forEach((el) => {
      if (el.id === id) {
        el.title = newTitle;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(storedTodos));
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
            {isEditing ? (
              <input
                className="title"
                type="text"
                value={newTitle}
                onChange={handleTitleChange}
                onBlur={saveTitle}
              />
            ) : (
              <span className="title" onClick={startEditing}>
                {newTitle}
              </span>
            )}
            <div className="wrapper">
              <img
                onClick={startEditing}
                src={
                  "https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Edit-01-256.png"
                }
                alt="Edit"
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
