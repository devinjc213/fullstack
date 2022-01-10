import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CreateClimb from "../pages/CreateClimb";

function Links() {
  return (
    <>
      <Routes>
        <Route exact path="/" exact element={<Home />} />
        <Route exact path="/newclimb" exact element={<CreateClimb />} />
      </Routes>
    </>
  );
}

export default Links;
