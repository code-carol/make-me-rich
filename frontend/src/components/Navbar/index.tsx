import "./Navbar.css";
import Button from "../Button";

const Navbar = () => {
  const handleLogin = () => {};
  return (
    <>
      // Brand Icon
      <div>
        <img src="" alt="Money Icon" />
      </div>
      <ul>
        <li>Features</li>
        <li>About us</li>
        <li>FAQ</li>
        <li>
          <Button
            className="navbar-btn"
            handleOnClick={handleLogin}
            type="button"
          >
            Login
          </Button>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
