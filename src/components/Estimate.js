import React from 'react';
import FormComponent from './FormComponent';

const Estimate = (props) => {
  return (
    <div class='d-flex justify-content-center align-items-center container'>
      <div class='card-long py-5 px-3'>
        <br />
        <br />
        <h2>Your estimated solar bill is ${props.estimate.toFixed(2)}</h2>
        <FormComponent />
      </div>
    </div>
  );
};

export default Estimate;
