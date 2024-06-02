import React from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

interface ModalComponent {
  children?: React.ReactNode;
}

const Modal: React.FC<ModalComponent> = (props) => {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog className={classes.modal}>{props.children}</dialog>
    </>
  );
};

export default Modal;
