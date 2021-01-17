import './index.css'
import { useState } from 'react'
import React from 'react'
import Navigation from './components/navigation/navigation'
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm'
import FaceRecognition from './components/faceRecognition/faceRecognition'
import Rank from './components/rank/rank'
import Register from './components/register/register'
import SignIn from './components/signIn/signIn'
import Particles from 'react-particles-js'

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
const App = ({ entries }) => {
  const [signIn, setSignIn] = useState(true)
  const [register, setRegister] = useState(false)
  const [navigation, setNavigation] = useState(true)
  const [imageUrl, setImageUrl] = useState('')
  const [input, setInput] = useState('')
  const [celebName, setCelebName] = useState('')
  const [apiCall, setApiCall] = useState(false)
  const [loading, setLoading] = useState(true)
  const [text, setText] = useState('')
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  })

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    })
  }

  const handleSignIn = () => {
    setSignIn(false)
  }
  const handleRegister = () => {
    setRegister(false)
  }
  const handleSignOut = () => {
    setApiCall(false)
    setSignIn(true)
    setImageUrl('')
    setInput('input')
    setCelebName('')
    setText('')
    setUser({ id: '', name: '', email: '', entries: 0, joined: '' })
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const detectCeleb = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].data.concepts[0].name
    setCelebName(clarifaiFace)
  }

  const handleClick = () => {
    setLoading(true)
    setApiCall(true)
    setImageUrl(input)
    setText('The celeb name is: ')
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
  const registerBtn = () => {
    setRegister(true)
    setSignIn(false)
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
              celebName={celebName}
              text={text}
              apiCall={apiCall}
              loading={loading}
            />
          )}
          {register || (
            <FaceRecognition
              imageUrl={imageUrl}
              celebName={celebName}
              text={text}
            />
          )}
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
              celebName={celebName}
              text={text}
              apiCall={apiCall}
              loading={loading}
            />
          )}
          {(navigation, register) && (
            <FaceRecognition
              imageUrl={imageUrl}
              celebName={celebName}
              text={text}
            />
          )}
        </div>
      )}
      {register ? (
        <Register
          handleRegister={handleRegister}
          loadUser={loadUser}
          // registerPage={handleRegister}
        />
      ) : (
        []
      )}
    </>
  )
}

export default App
