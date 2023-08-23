import {React, useState} from 'react'
import Lottie from "lottie-react";
import Confetti from '../lottie/animation_lllckjb2.json';
import { motion } from "framer-motion"


const ButtonComponent = ({
    isAboutMeOpen,
    setIsAboutMeOpen,
    isPortfolioOpen,
    setIsPortfolioOpen,
  }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const triggerAboutMe = () => {
    setButtonClicked(!buttonClicked)
    setIsAboutMeOpen(!isAboutMeOpen)
  }
  const triggerPortfolio = () => {
    setButtonClicked(!buttonClicked)
    setIsPortfolioOpen(!isPortfolioOpen)
  }

  return (
    <div style={{marginTop: '20px'}}>
      {buttonClicked ? 
        <Lottie loop={false} animationData={Confetti} className='about-confetti'/>
        : ''
      }
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 1000 }}
      initial={{scale: 0}}
      animate={{
        x: 0, scale: 1,
        ease: "linear",
        duration: 1,
      }}
      onClick={triggerAboutMe}
      >ABOUT</motion.button>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 1000 }}
      initial={{scale: 0}}
      animate={{
        x: 0, scale: 1,
        ease: "linear",
        duration: 1,
      }}
      onClick={triggerPortfolio}
      >PORTFOLIO</motion.button>
    </div>
  )
}

export default ButtonComponent
