import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar-expand-md d-flex justify-content-between">
        <a href="#">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/questengine-da9e6.appspot.com/o/QuestEngineLogo.png?alt=media&token=c2e1095d-b7f5-4cd9-a5a8-ec359a724c1cc"
            alt="QuestEngine logo"
          />
        </a>

        <li class="active">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </nav>
    );
  }
}
