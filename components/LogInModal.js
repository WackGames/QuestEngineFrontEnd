import Link from "next/link";

function LogInModal() {
  return (
    <div>
      <div className="login-page">
        <h3>Login</h3>
        <div className="container">
          <form id="login" method="get">
            <div>
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Username" />
              <br />
            </div>
            <div className="password-container">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
          </form>
          <button type="button" className="btn btn-outline-primary">
            LOGIN
          </button>
          <div className="signup-link">
            Not a member? <a href="">Sign up now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInModal;
