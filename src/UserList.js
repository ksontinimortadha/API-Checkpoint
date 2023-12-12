import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>User List</h1>
      <div className="cards" style={{ display: "flex", flexWrap: "wrap" }}>
        {listOfUsers.map((user) => (
          <div
            className="card"
            key={user.id}
            style={{
              margin: "5px",
              paddingLeft: "10px",
              flexBasis: "calc(33% - 20px)",
              marginBottom: "10px",
              border: "1px solid grey",
              borderRadius: "5px",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ textAlign: "center" }}>
              <i
                style={{ marginLeft: "15px", marginRight: "15px" }}
                class="fa-solid fa-user"
              ></i>
              {user.name}
            </h3>
            <p>
              <i
                style={{ marginLeft: "15px", marginRight: "10px" }}
                class="fa-solid fa-envelope"
              ></i>
              Email : {user.email}
            </p>
            <p>
              <i
                style={{ marginLeft: "15px", marginRight: "10px" }}
                class="fa-solid fa-phone"
              ></i>
              Phone : {user.phone}
            </p>
            <p>
              <i
                style={{ marginLeft: "15px", marginRight: "10px" }}
                class="fa-solid fa-pager"
              ></i>
              Website : {user.website}
            </p>
            <p>
              <i
                style={{ marginLeft: "15px", marginRight: "10px" }}
                class="fa-solid fa-building"
              ></i>
              Company : {user.company.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
