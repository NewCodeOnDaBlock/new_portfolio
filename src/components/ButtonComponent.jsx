import {React, useState} from 'react'
import Lottie from "lottie-react";
import Confetti from '../lottie/animation_lllckjb2.json';

const ButtonComponent = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const triggerAboutMe = () => {
    setButtonClicked(true)
    if(!buttonClicked) {
    } else {
      setButtonClicked(false)
    }
  }
  const triggerPortfolio = () => {
    setButtonClicked(true)
    if(!buttonClicked) {
    } else {
      setButtonClicked(false)
    }
  }

  return (
    <div style={{marginTop: '20px'}}>
      {buttonClicked ? 
        <Lottie loop={false} animationData={Confetti} className='about-confetti'/>
        : ''
      }
      <button onClick={triggerAboutMe}>ABOUT</button>
      <button onClick={triggerPortfolio}>PORTFOLIO</button>
    </div>
  )
}

export default ButtonComponent
