import Link from "next/link";

function LogInModal() {
  return (
    <div className="login-container">
      <div className="Instructions">
        <div className="Welcome">
          <h1>Hello</h1>
          <h2> Welcome to Quest Engine!</h2>
        </div>
        <ul className="landingButtons">
          <li>
            <Link href="/Login">
              <button className="loginButton">Sign In To Your Account.</button>
            </Link>
          </li>

          <li>
            <Link href="/Register">
              <button className="signupButton">Register New Account.</button>
            </Link>
          </li>
        </ul>
        <section>
          <p>
            ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit
            amet, consectetur adipiscing elit. ipsum dolor sit amet,
            consectetur.
          </p>
        </section>
      </div>
    </div>
  );
}

export default LogInModal;
