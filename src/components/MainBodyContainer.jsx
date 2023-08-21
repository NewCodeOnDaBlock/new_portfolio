import React from 'react'
import profilePic from '../assets/profile_pic.jpeg';
import ButtonComponent from './ButtonComponent';
import SocialIconComponent from './SocialIconComponent';

const MainBodyContainer = () => {
  return (
    <div className='main-body-container'>
      <div className='left-container'>
        LEFT
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
          <ButtonComponent />
        </div>
        <div className='icon-container'>
          <SocialIconComponent />
        </div>
      </div>
      <div className='right-container'>
        RIGHT
      </div>
    </div>
  )
}

export default MainBodyContainer
