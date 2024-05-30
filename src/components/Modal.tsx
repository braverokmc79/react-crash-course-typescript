import React from "react";
import classes from "./Modal.module.css";

const Modal: React.FC<{children?:React.ReactNode}> = (props) => {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open    className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
