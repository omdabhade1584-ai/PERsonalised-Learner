
import React, { useState } from "react";
import "./Auth.css";

function Register({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    let newErrors = {};

    // Name validation
    if (name.length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Password validation
    if (password.length < 8) {
      newErrors.password =
        "Password must contain at least 8 characters.";
    } else if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      newErrors.password =
        "Include uppercase, lowercase and a number.";
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    setErrors(newErrors);
    setSuccess("");

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Registration details validated successfully!");
      form.reset();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-header">
          <h1>Create Account</h1>
          <p>Join Personalised Learner and start learning.</p>
        </div>

        <form onSubmit={handleRegister}>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
          {errors.name && (
            <p className="error-message">{errors.name}</p>
          )}

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          {errors.email && (
            <p className="error-message">{errors.email}</p>
          )}

          <label>Password</label>
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create password"
              required
            />
            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
          />
          {errors.confirmPassword && (
            <p className="error-message">
              {errors.confirmPassword}
            </p>
          )}

          {success && (
            <p className="success-message">{success}</p>
          )}

          <button type="submit" className="auth-button">
            Create Account
          </button>

        </form>

        <p className="auth-switch">
          Already have an account?
          <button type="button" onClick={onLogin}>
            Login
          </button>
        </p>

      </div>
    </div>
  );
}

export default Register;
