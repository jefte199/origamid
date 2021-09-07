import React from 'react';

const Modal = ({ modal, setModal }) => {
  return (
    <>
      <p style={{ borderStyle: "solid", borderWidth: "1px" }}>
        My modal      :   
        <button onClick={() => {setModal(false)}}>Excluir</button>
      </p>
    </>
  );
};

export default Modal;
