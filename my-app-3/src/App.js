import { useState, useRef, useEffect } from "react";
import Helper from "./helper";

function App() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const but1 = useRef();
  const inpu1 = useRef();
  const inpu2 = useRef();
  const inpu3 = useRef();
  function buttonListener() {
    setData([
      ...data,
      inpu1.current.value,
      inpu2.current.value,
      inpu3.current.value,
    ]);
    console.log(data);
  }
  useEffect(() => {
    console.log(data.at(-1));
  });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  });
  return (
    <>
      <input ref={inpu1} type="text" />
      <input ref={inpu2} type="text" />
      <input ref={inpu3} type="email" />
      <button ref={but1} onClick={buttonListener}>
        push
      </button>
      <Helper data={users} />
    </>
  );
}

export default App;
