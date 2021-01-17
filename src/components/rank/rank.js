import React from 'react'

const Rank = ({ entries, name }) => {
  return (
    <>
      <div className="white ttc ph3 center f3">
        {`${name}, your current entry count is ...`}
      </div>
      <div className="white f1 center">
        <mark>#{entries}</mark>
      </div>
    </>
  )
}

export default Rank
