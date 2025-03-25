import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import {NavLink} from 'react-router-dom';

export default function Login() {
  return (
    <div className="overlay d-flex justify-content-center align-items-center vh-100">
      <div
        className="main-form p-5 rounded-4 shadow-lg"
        style={{ backgroundColor: "white", maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4" style={{ color: "hsl(36, 88%, 50%)" }}>
          Log in
        </h2>

        {/* Form with Labels on the Left and Above Inputs */}
        <form>
          <div className="mb-3 d-flex flex-column">
            <label
              htmlFor="email"
              className="form-label fw-bold text-start"
              style={{ color: "#333" }}
            >
              Your email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3 d-flex flex-column">
            <label
              htmlFor="password"
              className="form-label fw-bold text-start"
              style={{ color: "#333" }}
            >
              Your password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label htmlFor="rememberMe" className="form-check-label">
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-decoration-none"
              style={{ color: "hsl(36, 88%, 50%)" }}
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "hsl(36, 88%, 50%)",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Login
            </button>
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "hsl(36, 88%, 50%)",
                color: "white",
                fontWeight: "bold",
                margin: "2.5px",
                textDecoration: "none",
              }}
            >
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                Back
              </NavLink>
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <p className="mb-0">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-decoration-none"
              style={{ color: "hsl(36, 88%, 50%)" }}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
