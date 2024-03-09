import Button from "../../components/Button";
import "./Register.css";

const Register = () => {
  const handleRegister = () => {};
  return (
    <>
      <div>
        <img src="./money.png" alt="Money Icon" />
        <h1>Make Me Rich</h1>
        <h3>Create account</h3>
        <input
          type="text"
          placeholder="Full Name"
          id="name"
          name="name"
          value=""
        />
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
        <Button
          className="register-btn"
          handleOnClick={handleRegister}
          type="button"
        >
          Register
        </Button>
        <p>Already have an account?</p> <a href="">Login</a>
        <div>----- or -----</div>
        <Button
          className="register-btn"
          handleOnClick={handleRegister}
          type="button"
        >
          Google
        </Button>
        <Button
          className="register-btn"
          handleOnClick={handleRegister}
          type="button"
        >
          Facebook
        </Button>
      </div>
    </>
  );
};

export default Register;
