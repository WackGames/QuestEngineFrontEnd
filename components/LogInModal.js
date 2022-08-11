import Link from "next/link";

function LogInModal() {
  return (
    <div>
      <div class="login-page">
        <h3>Login</h3>
        <div class="username-container">
          <form id="login" method="get">
            <div>
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="Username" />
              <br />
            </div>
            <div class="password-container">
              <i class="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
          </form>
          <button type="button" class="btn btn-outline-primary">
            LOGIN
          </button>
          <div class="signup-link">
            Not a member? <a href="">Sign up now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInModal;
