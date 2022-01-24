import React from "react";

const User = ({ user }) => {
  return (
    <div className="col-lg-4 col p-3 justify-self-center">
      <div className="card bg-dark text-light" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
