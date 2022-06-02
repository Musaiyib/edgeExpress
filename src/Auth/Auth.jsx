import React, { useState } from "react";
import "./Auth.scss";
import Logo from "../img/logo.png";

const Auth = () => {
  const [logOrSignup, setLogOrSignup] = useState(true);
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {logOrSignup ? (
        <LogIn setLogOrSignup={setLogOrSignup} logOrSignup={logOrSignup} />
      ) : (
        <SignUp setLogOrSignup={setLogOrSignup} logOrSignup={logOrSignup} />
      )}
    </div>
  );
};
function LogIn({ setLogOrSignup, logOrSignup }) {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="E-mail"
            className="infoInput"
            name="email"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account?{" "}
            <span
              className="logOrSignup"
              onClick={() => setLogOrSignup(!logOrSignup)}
            >
              SignUp
            </span>
          </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}
function SignUp({ setLogOrSignup, logOrSignup }) {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="email"
            placeholder="E-mail"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account.{" "}
            <span
              className="logOrSignup"
              onClick={() => setLogOrSignup(!logOrSignup)}
            >
              Login
            </span>
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
