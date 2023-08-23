import {React, useState} from 'react'
import profilePic from '../assets/profile_pic.jpeg';
import AboutMeModalComponent from './AboutMeModalComponent';
import ButtonComponent from './ButtonComponent';
import PortfolioModalComponent from './PortfolioModalComponent';
import SocialIconComponent from './SocialIconComponent';
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect'


const MainBodyContainer = () => {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)

 


  const closeModals = () => {
    setIsAboutMeOpen(false)
    setIsPortfolioOpen(false)
  }

  return (
    <div className='main-body-container'>
      <div
        onClick={closeModals}
        className={`menu-background ${isAboutMeOpen || isPortfolioOpen ?
        'active-menu-background'
        :
        ''
      }`}>
      
      </div>
      <div className='left-container'>
        <AboutMeModalComponent 
          isAboutMeOpen={isAboutMeOpen}
          setIsAboutMeOpen={setIsAboutMeOpen}
        />
      </div>
      <div className='mid-container'>
        <div className='profile-pic-container'>
          <motion.img
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            transition={{ type: "spring", stiffness: 100 }}
            initial={{scale: 0}}
            animate={{
              x: 0, scale: 1,
              ease: "linear",
              duration: 5,
            }}
            className='profile-pic'
            src={profilePic}
            alt='profile-pic'
            style={{cursor: 'pointer'}}
          />
        </div>
        <h1
          style={{
            textAlign: 'center',
            color: 'lightslategrey',
            fontSize: '16px',
            fontWeight: '300'
          }}>
        <Typewriter 
          onInit={(typewriter) => {
            typewriter
            .typeString('HELLO...')
            .pauseFor(1000)
            .typeString('<span></span>')
            .typeString("MY NAME IS RADEN.")
            .start();
          }}
        />
        <br></br>
        <Typewriter 
          onInit={(typewriter) => {
            typewriter
            .pauseFor(5000)
            .typeString("FULL STACK SOFTWARE DEVELOPER AT YOUR SERVICE!")
            .start();
          }}
        />
        </h1>
        <div className='btn-container'>
          <ButtonComponent 
            isAboutMeOpen={isAboutMeOpen}
            setIsAboutMeOpen={setIsAboutMeOpen}
            isPortfolioOpen={isPortfolioOpen}
            setIsPortfolioOpen={setIsPortfolioOpen}
          />
        </div>
        <div className='icon-container'>
          <SocialIconComponent />
        </div>
      </div>
      <div className='right-container'>
        <PortfolioModalComponent
          isPortfolioOpen={isPortfolioOpen}
          setIsPortfolioOpen={setIsPortfolioOpen}
        />
      </div>
    </div>
  )
}

export default MainBodyContainer
