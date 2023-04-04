import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo_sub.png'
import Logo from './Logo'
import './index.scss'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['o','n','','A', 'p', 'r', 'i','l','','4','t','h','', '2', '0', '2', '3','','@','', '1', '1','', ':','', '5', '9', '.', '8', '9', '9', '9','', 'p', 'm','', ]
  const jobArray = [
    'S',
    'o',
    'f',
    't ',
    'w',
    'a',
    'r',
    'e',
    '',
    '&',
    '',
    'N',
    'e',
    't',
    'w',
    'o',
    'r',
    'k ',
    '',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Welcome</span>&nbsp;
            <span className={`${letterClass} _12`}>to my</span>
            <span className={`${letterClass} _13`} ></span>&nbsp;
            <span className={`${letterClass} _14`}></span>
            <img 
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>FrontEnd & BackEnd Developer / JavaScript Expert / Photographer / Technology 
             Instructor / IT Consultant / Technical Support Specialist (Remote) /<br />
             IT Network Support Engineer.
          </h2>
        </div>
        <Logo />
      </div>

      
      <Loader type="square-spin" />
    </>
  )
}

export default Home;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// My to be recycled codes is needed to be implemented 
//  {/* <Link to="/contact" className="flat-button">
//   CONTACT ME
// </Link> */} 