import {React, useState} from 'react'
import profilePic from '../assets/profile_pic.jpeg';
import AboutMeModalComponent from './AboutMeModalComponent';
import ButtonComponent from './ButtonComponent';
import PortfolioModalComponent from './PortfolioModalComponent';
import SocialIconComponent from './SocialIconComponent';

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
        <img
          className='profile-pic'
          src={profilePic}
          alt='profile-pic'
        />
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
