import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reload,
  addValue,
  multiplyValue,
  divisionValue,
  squareValue,
  exponentiationValue,
} from "./store/counterSlice";
import { addExpression, removeExpression } from "./store/notesSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counterValue.count);
  const expressions = useSelector((state) => state.notes.expressions);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  function inc() {
    dispatch(increment());
  }
  function dec() {
    dispatch(decrement());
  }
  function add() {
    dispatch(addValue(isNaN(+value) ? 0 : +value));
  }
  function multiply() {
    dispatch(multiplyValue(isNaN(+value) ? 0 : +value));
  }
  function division() {
    dispatch(divisionValue(isNaN(+value) ? 0 : +value));
  }
  function square() {
    dispatch(squareValue(isNaN(+value) ? 0 : +value));
  }
  function exponentiation() {
    dispatch(exponentiationValue(isNaN(+value) ? 0 : +value));
  }
  function changeArr(e) {
    let curr = e.target.parentNode.querySelector(".input-arr").value;
    dispatch(addExpression(curr));
  }
  function removeLastElement() {
    dispatch(removeExpression());
  }
  return (
    <div className="container">
      <div>
        <h3>{count}</h3>
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
      </div>
      <button onClick={() => dispatch(reload())}>Reset</button>
      <div>
        <input
          type="text"
          value={value}
          onChange={(el) => setValue(el.target.value)}
        />

        <button onClick={add}>plus value</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={division}>division</button>
        <button onClick={exponentiation}>exponentiation</button>
        <button onClick={square}>square</button>
      </div>
      <div>
        <h3>Вирази:</h3>
        <input className="input-arr" />
        <button onClick={changeArr}>Додати вираз</button>
        <button onClick={removeLastElement}>Видалить останій вираз</button>
        <textarea
          readOnly
          style={{ width: "300px", height: "300px" }}
          value={expressions.join(",")}
        />
      </div>
    </div>
  );
}
export default App;
