import React from "react";
import { Link } from "react-router";
import axios from "axios";
import { useState } from "react";

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")





  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form>
          <input type="text" name="username" placeholder="Enter username" />
          <input type="email" name="email" placeholder="Enter Email" />
          <input type="password" name="password" placeholder="Enter Password" />
          <button>Register</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="toggleAuthForm" to="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
