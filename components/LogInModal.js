import Link from "next/link";

function LogInModal() {
  return (
    <div className="main-container">
      <div className="login-page">
        <h4 className="mt-4 mb-4">Log In to Your Quest Engine Account!</h4>
        <div className="container">
          <form id="login" method="get">
            <div className="username-login">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="password-login">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
          </form>

          <button type="button" className="btn btn-outline-primary">
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
