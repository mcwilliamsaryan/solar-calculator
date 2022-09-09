import React from 'react';

const SquareFeet = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div class='d-flex justify-content-center align-items-center container'>
      <div class='card py-5 px-3'>
        <br />
        <br />
        <br />
        <h2>How many square feet is your home?</h2>
        <br />
        <input
          class='input'
          type='text'
          placeholder='Enter Here'
          label='Square Feet'
          onChange={handleChange}
          defaultValue={values.sqaureFeet}
        />
        <br />
        <br />
        <div>
          <button class='button-77' onClick={Continue} role='button'>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SquareFeet;
