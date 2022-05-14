import React from 'react'
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
  
     <div className="RightSide">
        <a href="/login">Login</a> 
        <a href="/signup">Sign Up</a> 
     </div>
     <div className="leftSide">
        <a href="/gamesList">Games</a>
        <a href="/readyQuizzes">Quizzes</a>
        <a href="/portfolio">Other apps</a>
     </div>
   
  </div>

  )
}

export default Navbar