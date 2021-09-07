import React from 'react';

import Title from "./components/Title";
import Modal from "./components/Modal";

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <Title cor="#4c8b64" txt="Modals" />
      {
        modal ? <Modal setModal={setModal} /> : ""
      }

      <button onClick={() => setModal(true)}>Criate</button>
    </>
  );
};

export default App;
