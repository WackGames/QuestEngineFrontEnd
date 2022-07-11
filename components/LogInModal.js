function LogInModal() {
    return (         
      <div class="login-container">
        <h1>Login to Your Account</h1>

    <div class="username-container">

      <form id="login" method="get">
        <i class="fa-solid fa-user"></i>
        <input type="text" 
        placeholder="Username" />
        <br />
    </div>

    <div class="password-container">
        <i class="fa-solid fa-lock"></i>
        <input type="password" 
        placeholder="Password" />
      </form>

      <br>

      <button type="button" class="btn btn-outline-primary">LOGIN</button>
    </div>
  </div>
    );
  }
  
  export default LogInModal;
  