import { Link, useLoaderData } from "react-router-dom";
import "./UserPage.css";

export default function UserPage() {
  const user = useLoaderData();
  console.log(user.address.geo);
  return (
    <div className="Main user-page">
      <div>
        <Link to="/users">Back</Link>
      </div>
      <ul>
        {Object.entries(user).map(([key, value], idx) => (
          <li key={idx}>
            <span>
              {key === "address" || key === "company" ? (
                <div>
                  <h6>{key}:</h6>
                  <ul>
                    {Object.entries(value).map(([subKey, subValue], subIdx) => (
                      <li className="subLI" key={subIdx}>
                        {subKey === "geo"
                          ? `${subKey}: ${Object.entries(subValue).map(
                              ([key, value]) => `${key}: ${value}`
                            )}`
                          : `${subKey}: ${subValue}`}
                      </li>
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
