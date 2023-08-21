import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

const SocialIconComponent = () => {
  return (
    <div className='social-icon-container'>
      <a href="https://www.linkedin.com/in/reiraden/" target="_blank" rel="noreferrer">
        <div className='icon-border'>
          <FontAwesomeIcon
            className='icon'
            icon={faLinkedin}
            size="lg"
            color="lightgrey"
          />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/reiraden/" target="_blank" rel="noreferrer">
        <div className='icon-border'>
          <FontAwesomeIcon
            className='icon'
            icon={faGithub}
            size="lg"
            color="lightgrey"
          />
        </div>
      </a>
      <a href="https://twitter.com/nucodeondablock" target="_blank" rel="noreferrer">
        <div className='icon-border'>
          <FontAwesomeIcon
            className='icon'
            icon={faTwitter}
            size="lg"
            color="lightgrey"
          />
        </div>
      </a>
    </div>
  )
}

export default SocialIconComponent
