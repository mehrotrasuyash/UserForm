import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState(""); //Array de-structuring, useState being initialised with a default value
  const [enteredAge, setEnteredAge] = useState(""); //Array de-structuring, useState being initialised with a default value

  const usernameChangeHandler = (event) => {
    //I want to enter what the user entered, and we can get that using the event object.
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(
      "------------------------- Entered name and age -------------------------"
    );
    console.log(enteredUsername, enteredAge);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
