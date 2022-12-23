import React, { Component, useState } from "react";
import { registerWithEmailAndPassword } from "../firebase";

export default function SignUp() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input
          onChange={(e) => setfirstName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="First name"
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Last name"
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="d-grid">
        <button
          onClick={(e) => {
            e.preventDefault();
            registerWithEmailAndPassword(
              firstName + " " + lastName,
              email,
              password
            );
          }}
          className="btn btn-primary"
        >
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
}
