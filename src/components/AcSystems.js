import React from 'react';

const AcSystems = ({ nextStep, prevStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div class='d-flex justify-content-center align-items-center container'>
      <div class='card py-5 px-3'>
        <br />
        <br />
        <br />
        <h2>How many AC systems do you own?</h2>
        <br />
        <input
          class='input'
          type='text'
          placeholder='Enter Here'
          name='acSystems'
          label='Square Feet'
          onChange={handleChange("acSystems")}
          defaultValue={values.sqaureFeet}
        />
        <br />
        <br />
        <div>
          <button class='button-77' onClick={Continue} role='button'>
            Continue
          </button>
          <button class='button-77' onClick={Previous} role='button'>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcSystems;
