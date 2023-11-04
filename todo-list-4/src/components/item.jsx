import React, { useState } from "react";
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

  const updateStatus = () => {
    setChecked(!checked);
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    storedTodos.forEach((el) => {
      if (el.id === id) {
        el.status = !checked;
        if (!checked) {
          setUnfinishedCount((prevCount) => prevCount - 1);
        } else {
          setUnfinishedCount((prevCount) => prevCount + 1);
        }
      }
    });
    localStorage.setItem("tasks", JSON.stringify(storedTodos));
  };

  const removeElement = () => {
    setVisible(false);
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    const updatedTodos = storedTodos.filter((item) => item.id !== id);
    storedTodos.forEach((el) => {
      if (el.id === id && !el.status) {
        setUnfinishedCount((prevCount) => prevCount - 1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTodos));
  };

  const handleTitleEdit = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleTitleSave = () => {
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
                type="text"
                value={newTitle}
                onChange={handleTitleChange}
                onBlur={handleTitleSave}
              />
            ) : (
              <span className="title" onDoubleClick={handleTitleEdit}>
                {title}
              </span>
            )}
            <div className="wrapper">
              <img
                onClick={handleTitleEdit}
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
