import React from 'react';

//Components
import Title from './components/Title';
/*
const styleCont = {
  maxWidth: "420px",
  margin: "0 auto",
  display: 'flex',
  flexDirection: "row"
}

const styleB = { margin: '.5rem' };
*/
const App = () => {
  const [select, setSelect] = React.useState("");

  return (
    <>
      <Title txt="Form: select" />
      <select
        value={select}
        onChange={({target}) => setSelect(target.value)}
        id="prod"
      >
        <option value="notebook">notebook</option>
        <option value="smartphone">smartphone</option>
        <option value="tablet">tablet</option>
      </select>
      {select}
    </>
  );
};

export default App;
