import React from "react";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Users from "./components/Users";
const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>React-fetch data</title>
        <link rel="shortcut icon" href="/hooks.png" />
      </Helmet>
      <Navbar />
      <Header />
      <Users />
    </React.Fragment>
  );
};

export default App;
