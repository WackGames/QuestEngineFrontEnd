import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router'

function ResetPasswordConfirmModal() {
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("")
    const [emptyPassword, setEmptyPassword] = useState([])
    const [emptyRetypePassword, setEmptyRetypePassword] = useState([])
    const [errorMsg, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const router = useRouter();

  const  passwordSubmit = async (e) => {
    e.preventDefault();
    let content;
    const res = await fetch(
        "https://questengine.onrender.com/authen/users/reset_password_confirm/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: router['query'].uid,
            token: router['query'].token,
            new_password: password,
            re_new_password: retypePassword
          }),
        }
      );
      try {
        content = await res.json();
      }
      catch {
        content = "";
        setSuccess(`NEW PASSWORD: ${password}`)
      }
      console.log({content})
      setEmptyPassword(content.new_password);
      setEmptyRetypePassword(content.re_new_password);
      setError(content.non_field_errors);

      try {
      } catch (err) {
        setEmptyRetypePassword("");
      }
    console.log({content})
}

  return (
    <div className="main-container">
      <div className="login-page">
        <h4 className="mt-4 mb-4">Reset Your Password</h4>
        <div className="container">
          <form id="login" method="post">
          <div className="password-login">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {emptyPassword?.length > 0 ? emptyPassword.map((err, i) => <p key={i}>* {err}</p>) : null}  
            </div>
            <div className="username-login">
              <i className="fa-solid fa-user"></i>
              <input
                type="password"
                placeholder="Retype Password"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
              />
              {emptyRetypePassword?.length > 0 ? emptyRetypePassword.map((err, i) => <p key={i}>* {err}</p>) : null}  
            </div>
            <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={(e) => passwordSubmit(e)}
          >
            CHANGE PASSWORD
          </button>
          {errorMsg?.length > 0 ? errorMsg.map((err, i) => <p key={i}>* {err}</p>) : null} 
          {success ? <h6 className="success">NEW PASSWORD: {password}</h6> : null}
          </form>

        </div>
      </div>
    </div>
  );
}

export default ResetPasswordConfirmModal;
