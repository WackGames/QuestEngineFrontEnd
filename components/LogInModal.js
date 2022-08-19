import Link from "next/link";
import { useState } from "react";

function LogInModal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitLogin = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="main-container">
      <div className="login-page">
        <h4 className="mt-4 mb-4">Log In to Your Quest Engine Account!</h4>
        <div className="container">
          <form id="login" method="post">
            <div className="username-login">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Username" value={username} />
            </div>
            <div className="password-login">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" value={password} />
            </div>
          </form>

          <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={(e) => submitLogin(e)}
          >
            LOGIN
          </button>

          <div className="signup-link">
            <p>
              Not a member? <a href="">Sign up now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInModal;
