import React from 'react';

const AvgElecBill = ({ nextStep, prevStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Enter Electric Bill Here'
        label='Average Electric Bill'
        onChange={handleChange}
        defaultValue={values.avgElecBill}
      />
      <button onClick={Continue}>Next</button>
      <button onClick={Previous}>Previous</button>
    </form>
  );
};

export default AvgElecBill;
