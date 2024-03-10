import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent } from "../../types";

import {
  auth,
  registerWithEmailAndPassword,
  loginWithGoogle,
} from "../../Firebase";

import Button from "../../components/Button";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (name !== "") {
      registerWithEmailAndPassword(name, email, password);
      navigate("/dashboard");
    } else {
      alert("Please enter you Full name");
    }
  };

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
          value={name}
          onChange={(e: ChangeEvent) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          value={email}
          onChange={(e: ChangeEvent) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={(e: ChangeEvent) => setPassword(e.target.value)}
          required
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
          className="google-btn"
          handleOnClick={handleRegister}
          type="button"
        >
          Google
        </Button>
        {/* <Button
          className="register-btn"
          handleOnClick={handleRegister}
          type="button"
        >
          Facebook
        </Button> */}
      </div>
    </>
  );
};

export default Register;
