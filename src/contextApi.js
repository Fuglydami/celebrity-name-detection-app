import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [signIn, setSignIn] = useState(true)
  const [register, setRegister] = useState(false)
  const [navigation, setNavigation] = useState(true)
  const [imageUrl, setImageUrl] = useState('')
  const [input, setInput] = useState('')
  const [celebName, setCelebName] = useState('')
  const [apiCall, setApiCall] = useState(false)
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
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
    setSignIn(true)
    setImageUrl('')
    setInput('input')
    setCelebName('')
    setApiCall(false)
    setName('')
    setUser({ id: '', name: '', email: '', entries: 0, joined: '' })
  }
  const backToLogin = () => {
    setRegister(false)
    setSignIn(true)
  }
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const detectCeleb = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].data.concepts[0].name
    setCelebName(clarifaiFace)
  }
  const registerBtn = () => {
    setRegister(true)
    setSignIn(false)
  }

  return (
    <AppContext.Provider
      value={{
        signIn,
        register,
        navigation,
        imageUrl,
        input,
        celebName,
        apiCall,
        loading,
        name,
        user,
        registerBtn,
        setSignIn,
        setRegister,
        setImageUrl,
        setInput,
        setCelebName,
        setApiCall,
        setName,
        setUser,
        setLoading,
        loadUser,
        handleSignIn,
        handleRegister,
        handleSignOut,
        backToLogin,
        handleChange,
        detectCeleb,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
