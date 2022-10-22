import React from 'react';
<<<<<<< Updated upstream
=======
import image from '../img/IMG_2182-2.jpeg';
import image2 from '../img/sunsolarlogo.png';
import { motion } from 'framer-motion';

const AcSystems = ({ nextStep, prevStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
>>>>>>> Stashed changes

const AcSystems = () => {
  return (
<<<<<<< Updated upstream
    <div>
      <h1>how many acs page</h1>
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
          <h2>How many AC systems do you own?</h2>
          <br />
          <input
            class='input'
            type='text'
            placeholder='Enter Here'
            name='acSystems'
            label='Square Feet'
            onChange={handleChange('acSystems')}
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
>>>>>>> Stashed changes
    </div>
  );
};

export default AcSystems