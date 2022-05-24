import React from "react";
import Card from "./Card";
import Button from "./Button"; //Reusing button and card component here
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      {
        <div
          onClick={props.onConfirm}
          className={classes.backdrop}
        /> /* The backdrop class will ensure that we don't interact with the screen at back */
      }
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
