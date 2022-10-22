import React from 'react';
<<<<<<< Updated upstream
=======
import image from '../img/DJI_0286.jpeg';
import image2 from '../img/sunsolarlogo.png';
import { motion } from 'framer-motion';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
    <div class='d-flex justify-content-center align-items-center container'>
      <img className='splash' src={image2}></img>
      <img className='background' src={image}></img>
      <motion.div
        className='box'
        style={{ originX: 0.5 }}
        transition={{ duration: 1.1 }}
        animate={{
          y: '-580px',
        }}
      >
        <div class='card py-5 px-3'>
          <br />
          <br />
          <br />
          <h2>What is your average electric bill?</h2>
          <br />
          <input
            class='input'
            type='number'
            name='avgElecBill'
            placeholder='Enter Here'
            label='Square Feet'
            onChange={handleChange('avgElecBill')}
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
          <br />
          <br />
        </div>
      </motion.div>
    </div>
>>>>>>> Stashed changes
  );
};

export default AvgElecBill;
