import React from 'react'
import { useState } from 'react'

const SignIn = ({ handleSignIn, handleRegister, registerBtn, loadUser }) => {
  const [signInEmail, setsignInEmail] = useState('')
  const [signInPassword, setsignInPassword] = useState('')

  const Email = (e) => {
    e.preventDefault()
    setsignInEmail(e.target.value)
  }
  const Password = (e) => {
    e.preventDefault()
    setsignInPassword(e.target.value)
  }
  const signIn = (e) => {
    e.preventDefault()
    fetch('https://boiling-headland-02130.herokuapp.com/signin', {
      method: 'post',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user)
           handleSignIn()
        }
      })
  }
  const register = () => {
    registerBtn()
  }
  return (
    <>
      <div className="signinForm">
        <p onClick={(register, registerBtn)} className="registerBtn">
          Register
        </p>
        <article className=" br3 ba b--black-10 mv5 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <form className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div clasNames="mt3">
                  <label className="db fw6 lh-copy f6" for="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    value={signInEmail}
                    onChange={Email}
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
                    value={signInPassword}
                    onChange={Password}
                  />
                </div>
              </fieldset>
              <div>
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                  onClick={(handleSignIn, signIn)}
                />
              </div>
              <div className="lh-copy mt3">
                <p
                  onClick={(register, registerBtn)}
                  className="f6 link dim black db pointer"
                >
                  Register
                </p>
              </div>
            </form>
          </main>
        </article>
      </div>
    </>
  )
}

export default SignIn
