import React from 'react';

const Input = ({id, name, setName}) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input
        id={id}
        value={name}
        onChange={({target}) => setName(target.value)}
      />
    </>
  )
}

export default Input;