import React from 'react'
import Navbar from '../components/Navbar'


function LandingPage() {
  return (
    <div className="container">

    <Navbar />
  <div>
    <h1 className="Welcome">
    <h1>
    Hello
  </h1>
    Welcome to Quest Engine!
  </h1>
    <button className="loginButton">
      Sign In To Your Account.
    </button>
       <button className="signupButton">
           Register New Account.
      </button>
    </div>
  </div>
    
  )
}

export default LandingPage