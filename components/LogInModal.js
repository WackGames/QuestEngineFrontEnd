import Link from "next/link";

function LogInModal() {
  return (
    <div class="main-container">
      <div class="login-page">
        <h4 class="mt-4 mb-4">Log In to Your Quest Engine Account!</h4>
        <div class="container">
          <form id="login" method="get">
            <div class="username-login">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="password-login">
              <i class="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
          </form>

          <button type="button" class="btn btn-outline-primary">
            LOGIN
          </button>
          <div class="signup-link">
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
