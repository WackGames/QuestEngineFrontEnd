import React from 'react'


function Navbar() {
  return (
    <div className="navbar">
     <nav>
     <div id="RightSide">
        <a href="/login">Login</a> 
        <a href="/signup">Sign Up</a> 
     </div>
     <div id="leftSide">
        <a href="/gamesList">Games</a>
        <a href="/readyQuizzes">Quizzes</a>
        <a href="/portfolio">Other apps</a>
     </div>
    </nav>
  </div>

  )
}

export default Navbar