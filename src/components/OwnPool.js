import React from 'react';

const OwnPool = ({ nextStep, prevStep, handleChange, values }) => {
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
        <h2>Do you own a pool?</h2>
        <br />
        <div>
          <button id='yes' class='button-77' onClick={Continue} role='button'>
            Yes
          </button>
          <button id='no' class='button-77' onClick={Continue} role='button'>
            No
          </button>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default OwnPool;
