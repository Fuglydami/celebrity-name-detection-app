import React from 'react'
import 'tachyons'
import './imageLinkForm.css'

const ImageLinkForm = ({ handleChange, handleClick }) => {
  return (
    <>
      <p className="f3 tc ph3">
        {`Enter the url of any celebrity picture and let this smart web app detect their name`}
      </p>
      <div className="center tc">
        <div className="form pa4 br3 shadow-5">
          <div>
            <input
              className="f4 pa2 w-70 center"
              type="text"
              placeholder="Enter image link to detect"
              onChange={handleChange}
            />
            <button
              onClick={handleClick}
              className="w-30 mt3 grow f4 link ph3 pv2 dib white bg-light-purple"
            >
              Detect
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageLinkForm
