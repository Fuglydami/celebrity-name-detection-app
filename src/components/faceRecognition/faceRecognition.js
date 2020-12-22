import React from 'react'

const FaceRecognition = ({ imageUrl, celebName, text
 }) => {
  return (
    <div>
      <div className="center ma">
        <div className="absolute flex mv2">
          <img
            className=""
            id="inputImage"
            src={imageUrl}
            width="400px"
            height="auto"
            alt=""
          />
          <div className=" celebName ml2 ph2">
            <p className="f4 ttc">
              <span className="textCeleb">{text}</span> {celebName}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaceRecognition
