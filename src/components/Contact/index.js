import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('jbrahism2@gmail.com', 'template_qc9ew3x', form.current, 'FT-9nSKzAInPxwGem')
      .then(
        () => {
          alert('Congratulation you message has been sent successfully!')
          window.location.reload(false)
        },
        () => {
          alert('Sorry more effort is required since your message Failed to be sent , please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Your thoughts, ideas, feedbacks and employment offers are all welcome and vital for my 
             existence, so please do not hesitate in contacting me ASAP! Thank you very much in  
              advance!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Submit" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Brahima
          <br />
          Soumahoro,
          <br />
         New Jersey <br />
          Irvington 07111 <br />
          Let coffee and code, Africa Style. <br />
          <br />
          <span>jbrahsim2@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[40.71983407787343, -74.22751942706068]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[40.71983407787343, -74.22751942706068]}>
              <Popup>Let coffee and code, Africa Style :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default Contact