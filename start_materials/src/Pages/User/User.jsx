import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalWnd from "../../components/Modal/ModalWnd";

export default function Users({ fetchUsers }) {
  const [data, setData] = useState([]);
  const [currID, setCurrID] = useState([]);
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await fetchUsers();
      setData(usersData);
    };

    fetchData();
  }, [fetchUsers]);

  const handleDelItem = () => {
    const updatedData = data.filter((user) => user.id !== currID);
    setData(updatedData);
    setModalState(false);
  };

  return (
    <div className="Main">
      <h1>Users</h1>
      <ModalWnd
        data={data}
        currID={currID}
        call={modalState}
        onDestroy={() => setModalState(false)}
        onDelete={handleDelItem} // Pass the function to the modal
      />
      <ol>
        {data.map((e) => (
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "350px",
              fontSize: "25px",
              paddingLeft: "0",
              paddingBottom: "10px",
              fontWeight: "700",
            }}
            key={e.id}
          >
            <Link to={`/users/${e.id}`}>{e.name}</Link>
            <button
              onClick={() => {
                setModalState(true);
                setCurrID(e.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
