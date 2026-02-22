import React from "react";
import "../style/form.scss";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loading } = useAuth();
  const navigate = useNavigate();
  if (loading) {
    return <h1>Loading horrai..........</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    handleLogin(username, password).then((res) => {
      navigate("/");
    });
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Dont have a account ?{" "}
          <Link className="toggleAuthForm" to="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
