import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [listClimbs, setListClimbs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/climbs").then((response) => {
      setListClimbs(response.data);
    });
  }, []);

  return (
    <div className="App">
      <br />
      <h1>List of Climbs</h1>
      {listClimbs.map((value, key) => {
        return (
          <div className="post">
            <div className="name"> {value.name} </div>
            <div className="grade"> {value.grade} </div>
            <div className="rope"> {value.rope ? "Rope" : "Boulder"} </div>
            <div className="user"> {value.user} </div>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
