import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/LandingPage.css"

function LandingPage() {
  return (
    <>

    <Navbar />
    <div className="Instructions">
  
    <div className="Welcome">
    <h1>
    Hello
  </h1>
    Welcome to Quest Engine!
  </div>
    <button className="loginButton">
      Sign In To Your Account.
    </button>
       <button className="signupButton">
           Register New Account.
      </button>
    </div>
  </>
    
  )
}

export default LandingPage