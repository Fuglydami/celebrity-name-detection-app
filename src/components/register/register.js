import React from 'react'
import { useState } from 'react'

const Register = ({ handleRegister, loadUser }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const nameInput = (e) => {
    setName(e.target.value)
  }
  const emailInput = (e) => {
    setEmail(e.target.value)
  }
  const passwordInput = (e) => {
    setPassword(e.target.value)
  }
  const signIn = (e) => {
    e.preventDefault()
    fetch('https://boiling-headland-02130.herokuapp.com/register', {
      method: 'post',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user)
          handleRegister()
        }
      })
  }
  return (
    <>
      <div className="signinForm">
        <article className=" br3 ba b--black-10 mv5 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <form className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div clasNames="mt3">
                  <label className="db fw6 lh-copy f6" for="name">
                    Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={nameInput}
                  />
                  <label className="db mt3 fw6 lh-copy f6" for="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    value={email}
                    onChange={emailInput}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" for="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={passwordInput}
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                  onClick={(handleRegister, signIn)}
                />
              </div>
              <div className="lh-copy mt3"></div>
            </form>
          </main>
        </article>
      </div>
    </>
  )
}

export default Register
