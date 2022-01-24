import React from "react";

const Header = () => {
  return (
    <div className="container py-3">
      <h5 className="text-center text-muted py-5 w-75 mx-auto lead">
        In this application/SPA ,i use react cra app to fetch api with the use
        of react custom hook.For the style,i use basic and simple style from
        bootstrap 5 library.
        <br />
        <span className="text-muted d-block mt-3">
          {" "}
          ---- Saadani Mohamed Amine
        </span>
      </h5>
      <hr />
    </div>
  );
};

export default Header;
