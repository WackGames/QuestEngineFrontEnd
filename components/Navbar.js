import React from 'react';
import Link from "next/link";
// import styles from '../styles/Navbar.module.scss'


export default class Navbar extends React.Component {
  render () {
    return (
     
<div className="navbar">
  <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/questengine-da9e6.appspot.com/o/QuestEngineLogo.png?alt=media&token=c2e1095d-b7f5-4cd9-a5a8-ec359a724c1c" alt="logo" />
  <section className="navlinks">
  <Link href="/login">
     <a className='navlink'>LOGIN</a>
  </Link>    
  <Link href="/register"> 
     <a className='navlink'>SIGN UP</a>
  </Link>  
  </section>
</div>
    );
  }
}

