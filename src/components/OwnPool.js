import React from 'react';
<<<<<<< Updated upstream
=======
import image from '../img/DJI_0304.jpeg';
import image2 from '../img/sunsolarlogo.png';
import { motion } from 'framer-motion';

const OwnPool = ({ nextStep, prevStep, handleChange, values, handleClick }) => {
  const Continue = (e) => {
    e.preventDefault();
    handleClick(e);
    nextStep();
  };
>>>>>>> Stashed changes

const OwnPool = () => {
  return (
<<<<<<< Updated upstream
    <div>
      <h1>do you own a pool page</h1>
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
          <h2>Do you own a pool?</h2>
          <br />
          <div>
            <button
              id='yes'
              class='button-77'
              onClick={Continue}
              role='button'
              name='ownPool'
            >
              Yes
            </button>
            <button
              id='no'
              class='button-77'
              onClick={Continue}
              role='button'
              name='ownPool'
            >
              No
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

export default OwnPool
