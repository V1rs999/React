import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Users({ fetchUsers }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAwait = async () => {
      setData(await fetchUsers());
    };
    fetchAwait();
  }, [fetchUsers]);
  return (
    <div className="Main">
      <h1>Users</h1>
      <ol>
        {data.map((e) => (
          <li
            style={{
              fontSize: "25px",
              paddingLeft: "0",
              paddingBottom: "10px",
              fontWeight: "700",
            }}
            key={e.id}
          >
            <Link to={`/users/${e.id}`}>{e.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
