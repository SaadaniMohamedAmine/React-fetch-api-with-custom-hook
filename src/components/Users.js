import React from "react";
import useFetch from "../hooks/useFetch";
import User from "./User";

const Users = () => {
  const { status, data } = useFetch();
  return (
    <div className="container">
      <h3>
        List of users <span className="text-muted lead"></span>
      </h3>
      <div className="row gx-5 justify-content-center">
        {status === "fetched" ? (
          data.map((user) => <User user={user} key={user.id} />)
        ) : (
          <div className="d-flex justify-content-center align-items-center py-5">
            <strong className="d-block mx-5">Loading...</strong>
            <div
              className="spinner-grow ml-5"
              style={{ width: "1.5rem", height: "1.5rem" }}
              role="status"
            ></div>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Users;
