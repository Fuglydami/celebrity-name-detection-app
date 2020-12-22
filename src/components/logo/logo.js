import React from 'react'
import Tilt from 'react-tilt'
import './logo.css'
import face from "./face.png"

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt shadow-2"
        options={{ max: 55 }}
        style={{ height: 105, width: 105 }}
      >
        <div className="Tilt-inner"><img src={face} alt="logo"/></div>
      </Tilt>
    </div>
  )
}

export default Logo
