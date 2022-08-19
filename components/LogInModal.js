import Link from "next/link";
import { useState } from "react";

function LogInModal() {
  const [loginUsername, setUsername] = useState("");
  const [loginPassword, setPassword] = useState("");
  const [errorMsg, setError] = useState("");
  const submitLogin = async (e) => {
    //e.preventDefault();
    const res = await fetch(
      "https://questengine.herokuapp.com/authen/jwt/create/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginUsername,
          password: loginPassword,
        }),
      }
    );
    const content = await res.json();
    setError(content.detail);
    console.log(loginUsername, loginPassword);
    console.log(content);
  };

  return (
    <div className="main-container">
      <div className="login-page">
        <h4 className="mt-4 mb-4">Log In to Your Quest Engine Account!</h4>
        <div className="container">
          <form id="login" method="post">
            <div className="username-login">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={loginUsername}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="password-login">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>

          <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={(e) => submitLogin(e)}
          >
            LOGIN
          </button>
          <p>{errorMsg}</p>
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
