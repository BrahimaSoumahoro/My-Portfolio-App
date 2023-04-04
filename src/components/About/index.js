import { useEffect, useState } from 'react'
import {
  faApple,
  faCss3,
  faHtml5,
  faJsSquare,
  faLinux,
  faReact,
  faWindows,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import 'loaders.css/src/animations/ball-zig-zag.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'B', 'r', 'a', 'h', 'i','m', 'a', '', 'S', 'o', 'u', 'm', 'a', 'h', 'o', 'r', 'o']}
              idx={14}
            />
          </h1>
          <p>
            Software Engineer with a Bachelor’s and more Degrees in Computer Systems Networking and      Telecommunications with over 10 years’ experience in System and Network Support. Fluent 
            in both French and English, with strong written and verbal communication skills in both 
            languages. Seeking to utilize my expertise, knowledge, and management abilities to 
            contribute to organization’s growth and success while enriching my knowledge in emerging 
            technology arenas. Excellent interpersonal skills to interact with clients, vendors,
            and team members. Extremely Motivated, self-starter and teamwork collaboration.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving myself, talents and skills.
          </p>
          <p>
            I am also striving for high, better and excellence!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
                   <div className="face1">
              <FontAwesomeIcon icon={faWindows} color="#00bcf2" size="1x"/>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" size="10x"/>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#264de4" size="10x"/>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" size="10x"/>
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" size="10x"/>
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faApple} color="#F0EEED" size="10x"/>
            </div>
               <div className="face7">
              <FontAwesomeIcon icon={faNetworkWired} color="#6C00FF" />
            </div>

             <div className="face8">
              <FontAwesomeIcon icon={faLinux} color="#03001C" size="10x" />
            </div>

          </div>
        </div>
      </div>
      <Loader type="ball-zig-zag-deflect" />
    </>
  )
}

export default About;


