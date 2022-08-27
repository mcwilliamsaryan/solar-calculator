import React from 'react';

const SquareFeet = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Enter Square Feet Here'
        label='Square Feet'
        onChange={handleChange}
        defaultValue={values.sqaureFeet}
      />
      <button onClick={Continue}>Next</button>
    </form>
  );
};

export default SquareFeet;
