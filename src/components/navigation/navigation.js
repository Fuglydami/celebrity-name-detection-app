import React from 'react'
import Tilt from 'react-tilt'
import './navigation.css'
import face from './face.png'


const Navigation = ({ handleSignOut }) => {
  return (
    <>
      <div className="navbar">
        <div className="ma4 mt0">
          <Tilt
            className="Tilt shadow-2"
            options={{ max: 55 }}
            style={{ height: 105, width: 110 }}
          >
            <div className="Tilt-inner">
              <img src={face} alt="logo" />
            </div>
          </Tilt>
        </div>
        <nav>
          <p
            onClick={handleSignOut}
            className="f4 link dim black mr4 pa2 ba pointer"
          >
            Sign Out
          </p>
        </nav>
      </div>
    </>
  )
}
export default Navigation
