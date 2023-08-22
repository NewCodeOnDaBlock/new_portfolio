import {React, useState, useRef} from 'react'
import profilePic from '../assets/profile_pic.jpeg';
import AboutMeModalComponent from './AboutMeModalComponent';
import ButtonComponent from './ButtonComponent';
import PortfolioModalComponent from './PortfolioModalComponent';
import SocialIconComponent from './SocialIconComponent';
import { motion, useAnimationFrame } from "framer-motion"



const MainBodyContainer = () => {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
  // const profilePicRef = useRef(null)

  // useAnimationFrame((time, delta) => {
  //   profilePicRef.current.style.transform = `rotateY(${time}deg)`
  // })


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
            className='profile-pic'
            // ref={profilePicRef}
            src={profilePic}
            alt='profile-pic'
            style={{cursor: 'pointer'}}
          />
        </div>
        <h1 style={{
            textAlign: 'center',
            color: 'lightslategrey',
            fontSize: '18px',
            fontWeight: '400'
          }}>
          FULL STACK SOFTWARE ENGINEER
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
