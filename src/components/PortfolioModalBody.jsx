import React from 'react'
import MEW from '../assets/MEW.png'
import DonkOne from '../assets/donk_one.png'


const PortfolioModalBody = () => {
  return (
    <div className='portfolio-body-container'>
        <h1>My Portfolio</h1>
            <div className="project-container">
              <img className='portfolio-image' src={MEW} alt='mew'/>
                <h3>
                  <a href="https://www.myetherwallet.com/" target="_blank" rel="noreferrer">
                    MyEtherWallet Inc.
                  </a>
                </h3>
                <p>VueJs | Web3js | EtherJs | SASS | TypeScript | </p>
            </div>          
            <div className="project-container">
                <img
                  className='portfolio-image'
                  src={DonkOne}
                  alt='mew'
                />
                <h3>
                  <a href="https://www.donkswap.com/" target="_blank" rel="noreferrer">
                    DonkSwap Finance
                  </a>
                </h3>
                <p>ReactJs | Web3js | EtherJs | SASS | TypeScript | </p>    
              </div>   
    </div>
  )
}

export default PortfolioModalBody
