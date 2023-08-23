import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"


const SocialIconComponent = () => {
  return (
    <div className='social-icon-container'>
      <a href="https://www.linkedin.com/in/reiraden/" target="_blank" rel="noreferrer">
        <motion.div
          className='icon-border'
          transition={{ type: "spring", stiffness: 100 }}
          initial={{scale: 0}}
          animate={{
            x: 0, scale: 1,
            ease: "linear",
            duration: 5,
          }}
          
        >
          <FontAwesomeIcon
            className='icon'
            icon={faLinkedin}
            size="lg"
            color="lightgrey"
          />
        </motion.div>
      </a>
      <a href="https://www.linkedin.com/in/reiraden/" target="_blank" rel="noreferrer">
        <motion.div
          className='icon-border'
          transition={{ type: "spring", stiffness: 100 }}
          initial={{scale: 0}}
          animate={{
            x: 0, scale: 1,
            ease: "linear",
            duration: 5,
          }}
        >
          <FontAwesomeIcon
            className='icon'
            icon={faGithub}
            size="lg"
            color="lightgrey"
          />
        </motion.div>
      </a>
      <a href="https://twitter.com/nucodeondablock" target="_blank" rel="noreferrer">
        <motion.div
          className='icon-border'
          transition={{ type: "spring", stiffness: 100 }}
          initial={{scale: 0}}
          animate={{
            x: 0, scale: 1,
            ease: "linear",
            duration: 5,
          }}
        >
          <FontAwesomeIcon
            className='icon'
            icon={faTwitter}
            size="lg"
            color="lightgrey"
          />
        </motion.div>
      </a>
    </div>
  )
}

export default SocialIconComponent
