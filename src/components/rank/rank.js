import React from 'react'

const Rank = ({ entries, name }) => {
  return (
    <>
      <div className="white ttc f3">
        {`${name}, your current entry count is ...`}
      </div>
      <div className="white f1">{entries}</div>
    </>
  )
}

export default Rank
