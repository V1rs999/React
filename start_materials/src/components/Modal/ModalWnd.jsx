import "./ModalWnd.css";

export default function ModalWnd({ currID, call, onDestroy, onDelete }) {
  if (!call) {
    return null;
  }
  const closeWnd = (event) => {
    if (event.target.className === "modal") {
      onDestroy();
    }
  };
  const handleDelItem = () => {
    onDelete(currID);
  };
  return (
    <div onClick={closeWnd} className="modal">
      <div className="modal-content">
        <i className="close" onClick={onDestroy}>
          X
        </i>
        <h1>Видалить запис!</h1>
        <div className="btns">
          <button onClick={handleDelItem} className="accept">
            Так, видалить
          </button>
          <button className="reject" onClick={onDestroy}>
            Ні, залишити
          </button>
        </div>
      </div>
    </div>
  );
}
