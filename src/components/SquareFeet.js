import React from 'react';
<<<<<<< Updated upstream
=======
import myVideo from '../img/compressedvideo.mp4';
import image from '../img/sunsolarlogo.png';
import { motion } from 'framer-motion';
>>>>>>> Stashed changes

const SquareFeet = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
<<<<<<< Updated upstream
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
=======
    <div class='container'>
      <img className='splash' src={image}></img>
      <video className='video div' autoPlay loop muted>
        <source src={myVideo} type='video/mp4'></source>
      </video>
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
          <h2>How many square feet is your home?</h2>
          <br />
          <input
            class='input'
            type='number'
            name='squareFeet'
            placeholder='Enter Here'
            label='Square Feet'
            onChange={handleChange('squareFeet')} // need to update each other component so we pass the name of the relevant key in state
            defaultValue={values.squareFeet}
          />
          <br />
          <br />
          <div>
            <button class='button-77' onClick={Continue} role='button'>
              Continue
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

export default SquareFeet;
