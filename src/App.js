import React from "react";
// import router
import { BrowserRouter as Router } from "react-router-dom";
// import motion

import AnimRoutes from "./components/AnimRoutes";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;
