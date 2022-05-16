import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/LandingPage.css"

function LandingPage() {
  return (
    <div className='pageContainer'>

        <Navbar />
        <div className="Instructions">
  
        <div className="Welcome">
        <h1>
        Hello
       </h1>
       <h2> Welcome to Quest Engine!</h2>
        </div>
  <div className="landingButtons">
    <button className="loginButton">
      Sign In To Your Account.
    </button>
       <button className="signupButton">
           Register New Account.
      </button>
      </div>
    </div>
    <section>
      <p>
        ipsum dolor sit amet, consectetur adipiscing elit.
        ipsum dolor sit amet, consectetur adipiscing elit.
        ipsum dolor sit amet, consectetur adipiscing elit.
        ipsum dolor sit amet, consectetur adipiscing elit.
        ipsum dolor sit amet, consectetur adipiscing elit.
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </section>
    <footer>
      footer will go here
    </footer>

  </div>
    
  )
}

export default LandingPage