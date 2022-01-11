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
  const [rope, setRope] = useState("rope");
  const [user, setUser] = useState("");

  const ropeList = ropeGrades.map((ropeGrade) => (
    <option key={ropeGrade.key}>{ropeGrade.value}</option>
  ));

  const boulderList = boulderGrades.map((boulderGrade) => (
    <option key={boulderGrade.key}>{boulderGrade.value}</option>
  ));

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/climbs", data).then((res) => {
      console.log("IT WORKED");
    });
  };

  return (
    <form className="create-climb-form">
      <div className="form-body">
        <div className="route-container">
          <input
            type="text"
            className="route-input"
            placeholder="Route Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="radio-container">
          <input
            type="radio"
            name="rope"
            id="radioRope"
            value="rope"
            checked={rope === "rope"}
            onChange={(e) => setRope(e.target.value)}
          />
          <label htmlFor="radioRope">Rope</label>
          <input
            type="radio"
            name="rope"
            id="radioBoulder"
            value="boulder"
            onChange={(e) => setRope(e.target.value)}
          />
          <label htmlFor="radioBoulder">Boulder</label>
        </div>
        <div className="grade-container">
          <label className="grade-label">Select a grade: </label>
          <select
            className="grade-select"
            name="grade"
            onChange={(e) => setGrade(e.target.value)}
          >
            {rope === "rope" ? ropeList : boulderList}
          </select>
        </div>
      </div>
    </form>

    // <Formik initialValues={initialValues} onSubmit={onSubmit}>
    //   {({ values, setFieldValue }) => (
    //     <Form className="createClimbForm">
    //       <key>Route Name:</key>
    //       <Field id="inputCreateClimb" name="name" />
    //       <br />
    //       <key>Rope or Boulder?</key>
    //       <Field type="radio" id="ropeRadio" name="rope" value="true"></Field>
    //       <key htmlFor="rope">Rope</key>
    //       <Field
    //         type="radio"
    //         id="boulderRadio"
    //         name="rope"
    //         value="false"
    //       ></Field>
    //       <key htmlFor="boulder">Boulder</key>
    //       <br />
    //       <key>Select Grade:</key>
    //       <Select
    //         id="dropDownBar"
    //         name="grade"
    //         options={values.rope === "true" ? ropeGrades : boulderGrades}
    //         onChange={(e) => setFieldValue("grade", e.key)}
    //       />

    //       <br />
    //       <key>Userame:</key>
    //       <Field id="inputCreateClimb" name="user" />
    //       <br />
    //       <button className="btn btn-success" type="submit">
    //         Add Climb
    //       </button>
    //     </Form>
    //   )}
    // </Formik>
  );
}

export default CreateClimb;
