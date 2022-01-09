import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [rope, setRope] = useState(false);
  const [user, setUser] = useState("");

  const ropeGrades = [
    { value: "5.5", key: "5.5" },
    { value: "5.6", key: "5.6" },
    { value: "5.7", key: "5.7" },
    { value: "5.8", key: "5.8" },
    { value: "5.9", key: "5.9" },
    { value: "5.10a", key: "5.10a" },
    { value: "5.10b", key: "5.10b" },
    { value: "5.10c", key: "5.10c" },
    { value: "5.10d", key: "5.10d" },
    { value: "5.11a", key: "5.11a" },
    { value: "5.11b", key: "5.11b" },
    { value: "5.11c", key: "5.11c" },
    { value: "5.11d", key: "5.11d" },
    { value: "5.12a", key: "5.12a" },
    { value: "5.12b", key: "5.12b" },
    { value: "5.12c", key: "5.12c" },
    { value: "5.12d", key: "5.12d" },
    { value: "5.13a", key: "5.13a" },
    { value: "5.13b", key: "5.13b" },
    { value: "5.13c", key: "5.13c" },
  ];

  const boulderGrades = [
    { value: "V0", key: "V0" },
    { value: "V1", key: "V1" },
    { value: "V2", key: "V2" },
    { value: "V3", key: "V3" },
    { value: "V4", key: "V4" },
    { value: "V5", key: "V5" },
    { value: "V6", key: "V6" },
    { value: "V7", key: "V7" },
    { value: "V8", key: "V8" },
    { value: "V9", key: "V9" },
    { value: "V10", key: "V10" },
    { value: "V11", key: "V11" },
    { value: "V12", key: "V12" },
    { value: "V13", key: "V13" },
    { value: "V14", key: "V14" },
    { value: "V15", key: "V15" },
    { value: "V16", key: "V16" },
  ];

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/climbs", data).then((res) => {
      console.log("IT WORKED");
    });
  };

  return (
    <form className="create-climb-form">
      <div className="form-body">
        <key className="route-name">Route Name: </key>
        <input
          type="text"
          placeholder="Route Name, if applicable"
          className="route-name-input"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <key className="rb-radio">Rope or Bouldering?</key>
        <br />
        <key className="rb-rope-key">Rope </key>
        <input
          type="radio"
          className="rb-radio-rope"
          name="rope"
          value={true}
          onChange={(e) => setRope(e.target.value)}
        />
        <key className="rb-boulder-key">Boulder </key>
        <input
          type="radio"
          className="rb-radio-boulder"
          name="rope"
          value={false}
          onChange={(e) => setRope(e.target.value)}
        />
        <br />
        <key className="grade-key">Select a grade: </key>
        <select
          className="grade-select"
          name="grade"
          onChange={(e) => setGrade(e.target.value)}
        ></select>
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
