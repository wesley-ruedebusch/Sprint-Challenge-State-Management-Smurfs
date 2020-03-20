import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf, smurfForm } from "../actions/actions";
import Smurf from "./Smurf";
import "./App.css";

function App(props) {
  useEffect(() => {
    props.getSmurf();
  }, []);

  //add new smurfs
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    height: "",
    age: ""
  });

  const handleChanges = event => {
    setNewSmurf({
      ...newSmurf,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="smurfs">
      <div>
        <h3>Welcome, Smurf!</h3>
        <label>
          Name: {""}
          <input
            type="text"
            name="name"
            value={newSmurf.name}
            onChange={handleChanges}
          />
        </label>
        <br />
        <label>
          Height: {""}
          <input
            type="text"
            name="height"
            value={newSmurf.height}
            onChange={handleChanges}
          />
        </label>
        <br />
        <label>
          Age: {""}
          <input
            type="text"
            name="age"
            value={newSmurf.age}
            onChange={handleChanges}
          />
        </label>
        <br />
      </div>

      <button onClick={() => props.smurfForm(newSmurf)}>
        Add a Smurf to your village!
      </button>

      {props.smurfs.map(item => {
        return <Smurf smurfs={item} key={item.id} />;
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurf, smurfForm })(App);
