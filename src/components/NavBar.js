import React from 'react';
import '../styles/Navbar.css';


export default class Navbar extends React.Component {
  render () {
    return (
     
<div class="navbar">
  <div class="logo">
    <img src="https://firebasestorage.googleapis.com/v0/b/questengine-da9e6.appspot.com/o/QuestEngineLogo.png?alt=media&token=c2e1095d-b7f5-4cd9-a5a8-ec359a724c1c" alt="logo" />
  </div>
  <div class="buttons">
    <button class="login">Login</button>
    <button class="signup">Sign Up</button>
  </div>
</div>
    );
  }
}
