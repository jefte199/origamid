import React from 'react';

const Radio = ({ option, setOption, txt, props }) => {
  return (
    <>
      <label>
        <input
          type="radio"
          name="question"
          value={txt}
          onChange={({target}) => setOption(target.value)}
          {...props}
        />
        {txt}
      </label>
    </>
  );
};

export default Radio;