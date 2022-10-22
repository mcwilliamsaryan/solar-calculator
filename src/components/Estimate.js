import React from 'react';
<<<<<<< Updated upstream
=======
import FormComponent from './FormComponent';
import image from '../img/DJI_0279.jpeg';
import { motion } from 'framer-motion';
>>>>>>> Stashed changes

const Estimate = () => {
  return (
<<<<<<< Updated upstream
    <div>
      <h1>estimate page</h1>
=======
    <div class='d-flex justify-content-center align-items-center container'>
      <img className='background' src={image}></img>
      <motion.div
        className='box'
        style={{ originX: 0.5 }}
        transition={{ duration: 1.1 }}
        animate={{
          y: '-780px',
        }}
      >
        <div class='card-long py-5 px-3'>
          <br />
          <br />
          <h2>
            Your estimated federal tax credit is ${props.estimate.toFixed(2)}
          </h2>
          <FormComponent />
        </div>
      </motion.div>
>>>>>>> Stashed changes
    </div>
  );
};

export default Estimate;