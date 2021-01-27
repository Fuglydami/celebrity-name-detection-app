import React from 'react'
import 'tachyons'
import './imageLinkForm.css'
import loadingimg from '../../loadingimg.svg'


const ImageLinkForm = ({
  handleChange,
  handleClick,
  celebName,
  apiCall,
  loading,
  name
}) => {
  return (
    <>
      <section>
        {apiCall ? (
          <div className=" center celebName ml2 ph2">
            <p className="f4 pv2 ttc">
              <span className="textCeleb flex">{name}</span>{' '}
              {loading ? (
                <img className="center" src={loadingimg} alt="loading" />
              ) : (
                celebName
              )}
            </p>
          </div>
        ) : (
          <p className="f3 tc ph3">
            {`Enter the url of any celebrity picture and let this smart web app
            detect their name`}
          </p>
        )}
        <div className="form center pa3 tc br3 shadow-4">
          <div>
            <input
              className="f4 pa2 w-100 center"
              type="text"
              placeholder="Enter image link to detect"
              onChange={handleChange}
            />
            <button
              onClick={handleClick}
              className="imageLinkBtn btn w-40 mt3 grow f4 link ph3 pv2"
            >
              Detect
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImageLinkForm
