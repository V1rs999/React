import { Link, useLoaderData } from "react-router-dom";

export default function UserPage() {
  const user = useLoaderData();
  return (
    <div className="Main user-page">
      <div>
        <Link to="/users">Back</Link>
      </div>
      <ul style={{ paddingLeft: "0", fontWeight: "700" }}>
        {Object.entries(user).map(([key, value], idx) => (
          <li
            style={{
              listStyleType: "none",
              fontSize: "25px",
              paddingLeft: "0",
              paddingBottom: "10px",
            }}
            key={idx}
          >
            <span>
              {key === "address" || key === "company" ? (
                <div>
                  <h6 style={{ padding: "0", margin: "0", fontSize: "25px" }}>
                    {key}:
                  </h6>
                  <ul>
                    {Object.entries(value).map(([subKey, subValue], subIdx) => (
                      <li
                        style={{ fontSize: "20px" }}
                        key={subIdx}
                      >{`${subKey}: ${subValue}`}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                `${key}: ${value}`
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
