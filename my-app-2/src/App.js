import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [pcolor, setPcolor] = useState();
  const [arr, setArr] = useState([1, 2, 435, 35]);
  const [num, setNum] = useState([0, 0, 0]);
  const push = function () {
    return setArr([...arr, 1]); //
  };
  function increace() {
    const newCounter = counter + 5;
    setCounter(newCounter);
    setPcolor({
      background: num,
    });
    changeColor();
    console.log(pcolor);
  }
  const changeColor = () => {
    const newColors = [...num].map(() => {
      return Math.floor(Math.random() * 256);
    });
    setNum(`rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`);
  };
  return (
    <>
      <h1>{counter}</h1>
      <h3>{num}</h3>
      <p style={pcolor}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At molestiae
        necessitatibus nisi quia veniam? Animi asperiores eius est,
        exercitationem explicabo impedit, itaque magnam obcaecati perspiciatis
        quam quas repellat ut voluptas!
      </p>
      <button onClick={increace}>Increace +</button>

      <h3>{arr}</h3>
      <button onClick={push}>Push</button>
      <ul>
        {arr.map((e, idx) => (
          <li key={idx}>{e}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
