import React, { useState } from "react";
//import { Formik, Form, Field, ErrorMessage } from "formik";
//import Select from "react-select";
//import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateClimb.css";
import { ropeGrades, boulderGrades } from "../assets/Grades";

/*
TODOS:
-make form sleeker?
-form validation
-styling
-mountain project API
*/

function CreateClimb() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [rope, setRope] = useState("");
  const [user, setUser] = useState("");

  const ropeList = ropeGrades.map((ropeGrade) => (
    <option key={ropeGrade.key}>{ropeGrade.value}</option>
  ));

  const boulderList = boulderGrades.map((boulderGrade) => (
    <option key={boulderGrade.key}>{boulderGrade.value}</option>
  ));

  const onSubmit = () => {
    axios
      .post("http://localhost:3001/climbs", {
        name: name,
        grade: grade,
        rope: rope,
        user: "testing no auth yet",
      })
      .then((res) => {
        console.log("IT WORKED");
      });
  };

  return (
    <form className="create-climb-form" onSubmit={onSubmit}>
      <div className="form-body">
        <div className="route-container">
          <input
            type="text"
            className="route-input"
            placeholder="Route Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="radio-container">
          <input
            type="radio"
            name="rope"
            id="radioRope"
            value="Rope"
            onChange={(e) => setRope(e.target.value)}
          />
          <label htmlFor="radioRope">Rope</label>
          <input
            type="radio"
            name="rope"
            id="radioBoulder"
            value="Boulder"
            onChange={(e) => setRope(e.target.value)}
          />
          <label htmlFor="radioBoulder">Boulder</label>
        </div>
        {rope ? (
          <div className="grade-container">
            <label className="grade-label">Select a grade: </label>
            <select
              className="grade-select"
              name="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              {rope === "rope" ? ropeList : boulderList}
            </select>
          </div>
        ) : null}

        <button type="submit">Add Entry</button>
      </div>
    </form>
  );
}

export default CreateClimb;
