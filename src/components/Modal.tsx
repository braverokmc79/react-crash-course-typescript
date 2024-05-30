import React from "react";
import classes from "./Modal.module.css";

interface ModalComponent{
    onClose: () => void;
    children?:React.ReactNode
}

const Modal: React.FC<ModalComponent> = (props) => {
  return (
    <>
      <div className={classes.backdrop}   onClick={props.onClose}      />
      <dialog   open  className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
