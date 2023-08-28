import React from 'react'
import MEW from '../assets/MEW.png'
import DonkOne from '../assets/donk_one.png'
import SongPlayer from '../assets/song_player_app.png'
import GitHub from '../assets/github.png'



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
                  alt='donk-one'
                />
                <h3>
                  <a href="https://www.donkswap.com/" target="_blank" rel="noreferrer">
                    DonkSwap Finance
                  </a>
                </h3>
                <p>ReactJs | Web3js | EtherJs | SASS | TypeScript | </p>    
            </div>   
            <div className="project-container">
                <img
                  className='portfolio-image'
                  src={SongPlayer}
                  alt='song-player'
                />
                <h3>
                  <a href="https://main--symphonious-druid-3da981.netlify.app/" target="_blank" rel="noreferrer">
                    Song Player App
                  </a>
                </h3>
                <p>ReactJs | SASS | </p>    
            </div>   
            <div className="project-container">
                <img
                  className='portfolio-image'
                  src={GitHub}
                  alt='git-hub'
                />
                <h3>
                  <a href="https://github.com/NewCodeOnDaBlock?tab=overview&from=2022-12-01&to=2022-12-31" target="_blank" rel="noreferrer">
                    See My Github for more projects...
                  </a>
                </h3>
                <p> Full Stack Software Engineer Experienced in navigating complex production environments in #ReactJs #Vue #JavaScript #TypeScript #Web3Js #EtherJs </p>    
            </div>   
    </div>
  )
}

export default PortfolioModalBody
