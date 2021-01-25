import React from 'react';
import { motion } from 'framer-motion';
import pokeball from '../../assets/pokeball.png';
import './Pokespinner.css'

const PokeSpinner = () => {
  const spinTransition = {
    loop: Infinity,
    duration: 0.5,
  }
  return (
    <div className="spinner-container">
      <motion.img
        src={pokeball}
        animate={{ rotate: 360 }}
        transition={spinTransition}
        style={{width:"5vw"}}
        />
  </div>
)};

export default PokeSpinner;