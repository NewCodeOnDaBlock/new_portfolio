import React from 'react'
import PortfolioModalBody from './PortfolioModalBody'

const PortfolioModalComponent = ({isPortfolioOpen}) => {
  return (
    <div className={`portfolio-modal ${isPortfolioOpen ? 'active-portfolio-modal' : ''}`}>
      <PortfolioModalBody />
    </div>
  )
}

export default PortfolioModalComponent
