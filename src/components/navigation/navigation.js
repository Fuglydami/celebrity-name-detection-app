import React from 'react'

const Navigation = ({ handleSignOut }) => {
  // if (isSignedIn) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p onClick={handleSignOut} className="f3 link dim black mr2 pa2 ba pointer">
        Sign Out
      </p>
    </nav>
  )
}
export default Navigation
