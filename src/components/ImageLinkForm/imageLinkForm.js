import React from 'react'
import 'tachyons'
import './imageLinkForm.css'
import Tilt from 'react-tilt'
import loadingimg from "../../loadingimg.svg"

const ImageLinkForm = ({
  handleChange,
  handleClick,
  text,
  celebName,
  apiCall,
  loading,
}) => {
  return (
    <>
      <section>
        {apiCall ? (
          <div className=" center celebName ml2 ph2">
            <p className="f4 ttc">
              <span className="textCeleb flex">{text}</span>{' '}
              {loading ? <img className="center" src={loadingimg} alt="loading"/> : celebName}
            </p>
          </div>
        ) : (
          <p className="f3 tc ph3">
            {`Enter the url of any celebrity picture and let this smart web app
            detect their name`}
          </p>
        )}
        <Tilt className="center" options={{ max: 55 }}>
          <div className="form  pa3 tc br3 shadow-5">
            <div>
              <input
                className="input f4 pa2 w-70 center"
                type="text"
                placeholder="Enter image link to detect"
                onChange={handleChange}
              />
              <button
                onClick={handleClick}
                className="imageLinkBtn btn w-30 mt3 grow f4 link ph3 pv2 dib white"
              >
                Detect
              </button>
            </div>
          </div>
        </Tilt>
      </section>
    </>
  )
}

export default ImageLinkForm
