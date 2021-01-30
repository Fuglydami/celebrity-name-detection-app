import './index.css'
import React from 'react'
import Navigation from './components/navigation/navigation'
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm'
import FaceRecognition from './components/faceRecognition/faceRecognition'
import Rank from './components/rank/rank'
import Register from './components/register/register'
import SignIn from './components/signIn/signIn'
import Particles from 'react-particles-js'
import {useGlobalContext } from './contextApi'

const particles = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
}
const App = () => {
  const {
    setApiCall,
    setLoading,
    setName,
    setImageUrl,
    input,
    user,
    loadUser,
    detectCeleb,
    navigation,
    handleSignOut,
    handleSignIn,
    register,
    signIn,
    handleChange,
    apiCall,
    loading,
    name,
    celebName,
    handleRegister,
    imageUrl,
    backToLogin,
    registerBtn,
  } = useGlobalContext()

  const handleClick = () => {
    setApiCall(true)
    setLoading(true)
    setName('The celeb name is:')
    setImageUrl(input)

    fetch('https://boiling-headland-02130.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        input: input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch('https://boiling-headland-02130.herokuapp.com/image', {
            method: 'put',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({
              id: user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              loadUser(Object.assign(user, { entries: count }))
            })
            .catch(console.log)
        }
        detectCeleb(response)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Particles className="particles" params={particles} />
      {navigation || <Navigation handleSignOut={handleSignOut} />}
      {signIn ? (
        <SignIn
          handleSignIn={handleSignIn}
          registerBtn={registerBtn}
          loadUser={loadUser}
        />
      ) : (
        <div>
          {register || <Navigation handleSignOut={handleSignOut} />}
          {register || <Rank entries={user.entries} name={user.name} />}
          {register || (
            <ImageLinkForm
              handleChange={handleChange}
              handleClick={handleClick}
              apiCall={apiCall}
              loading={loading}
              name={name}
              celebName={celebName}
            />
          )}
          {register || <FaceRecognition imageUrl={imageUrl} />}
        </div>
      )}
      {navigation ? (
        []
      ) : (
        <div>
          {(navigation, register) && (
            <Rank entries={user.entries} name={user.name} />
          )}
          {(navigation, register) && (
            <ImageLinkForm
              handleChange={handleChange}
              handleClick={handleClick}
              apiCall={apiCall}
              loading={loading}
              celebName={celebName}
              name={name}
            />
          )}
          {(navigation, register) && <FaceRecognition imageUrl={imageUrl} />}
        </div>
      )}
      {register ? (
        <Register
          handleRegister={handleRegister}
          loadUser={loadUser}
          backToLogin={backToLogin}
        />
      ) : (
        []
      )}
    </>
  )
}
export default App
