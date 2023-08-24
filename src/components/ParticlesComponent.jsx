import {React, useCallback} from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles"
import particlesConfiguration from '../conifg/particles.config.js'

const ParticlesComponent = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
    //console.log(container);
}, []);
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfiguration}
      />  
    </div>
  )
}

export default ParticlesComponent
