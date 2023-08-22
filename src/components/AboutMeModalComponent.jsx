import React from 'react'
import AboutMeModalBody from './AboutMeModalBody'

const AboutMeModalComponent = ({isAboutMeOpen}) => {
  return (
    <div className={`about-me-modal ${isAboutMeOpen ? 'active-about-me-modal' : ''}`}>
      <AboutMeModalBody />
    </div>
  )
}

export default AboutMeModalComponent
