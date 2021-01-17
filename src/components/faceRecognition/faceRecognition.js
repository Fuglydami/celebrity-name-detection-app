import React from 'react'

const FaceRecognition = ({ imageUrl, celebName, text
 }) => {
  return (
    <div>
      <div className="center ma">
        <div className="absolute mv2">
          <img
            className=""
            id="inputImage"
            src={imageUrl}
            width="400px"
            height="auto"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default FaceRecognition
