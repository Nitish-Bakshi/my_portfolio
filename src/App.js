import React from "react";
// import router
import { BrowserRouter as Router } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
import AnimRoutes from "./components/AnimRoutes";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import Socials from "./components/Socials";

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
