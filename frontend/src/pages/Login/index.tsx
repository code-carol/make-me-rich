import Button from "../../components/Button";
import "./Login.css";

const Login = () => {
  const handleLogin = () => {};
  return (
    <>
      <div>
        <img src="./money.png" alt="Money Icon" />
        <h1>Make Me Rich</h1>
        <h3>Welcome back!</h3>
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          value=""
        />
        <input
          type="text"
          placeholder="Password"
          id="password"
          name="password"
          value=""
        />
        <input type="checkbox" id="remember" name="remember" value="" />
        <label htmlFor="remember">Remember me</label>
        <a href="">Forgot Password?</a>
        <Button className="login-btn" handleOnClick={handleLogin} type="button">
          Login
        </Button>
        <p>Don't have an account?</p> <a href="">Register</a>
        <div>----- or -----</div>
        <Button className="login-btn" handleOnClick={handleLogin} type="button">
          Google
        </Button>
        <Button className="login-btn" handleOnClick={handleLogin} type="button">
          Facebook
        </Button>
      </div>
    </>
  );
};

export default Login;
