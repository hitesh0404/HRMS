import React from 'react'
// import React from "react";
import "./../css/loginregister.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="overlay d-flex justify-content-center align-items-center">
      <div
        className=" main-form p-5 rounded-4 shadow-lg"
        style={{ backgroundColor: "white", maxWidth: "500px", width: "100%" }}
      >
        <h2 className="text-center mb-4" style={{ color: "hsl(36, 88%, 50%)" }}>
          Create an Account
        </h2>

        {/* Form with Labels on the Left but Above Inputs */}
        <form>
          <div className="mb-3 d-flex flex-column">
            <label
              htmlFor="fullName"
              className="form-label fw-bold text-start"
              style={{ color: "#333" }}
            >
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-3 d-flex flex-column">
            <label
              htmlFor="email"
              className="form-label fw-bold text-start"
              style={{ color: "#333" }}
            >
              Email Address
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
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="mb-3 d-flex flex-column">
            <label
              htmlFor="confirmPassword"
              className="form-label fw-bold text-start"
              style={{ color: "#333" }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                required
              />
              <label htmlFor="terms" className="form-check-label">
                I agree to the terms & conditions
              </label>
            </div>
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
              Register
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
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-decoration-none"
              style={{ color: "hsl(36, 88%, 50%)" }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
