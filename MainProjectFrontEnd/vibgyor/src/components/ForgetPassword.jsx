import React from "react";
import { NavLink } from "react-router-dom";

export default function ForgetPassword() {
  return (
    <div className=" overlay d-flex justify-content-center align-items-center vh-100">
      <div
        className="main-form p-5 rounded-4 shadow-lg"
        style={{ backgroundColor: "white", maxWidth: "500px", width: "100%" }}
      >
        <h2 className="text-center mb-4" style={{ color: "hsl(36, 88%, 50%)" }}>
          Forgot Password
        </h2>

        <form>
          <div className="mb-3 d-flex flex-column">
            <label
              htmlFor="email"
              className="form-label fw-bold text-start"
              style={{ color: "#333" }}
            >
              Enter your email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
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
              Send Reset Link
            </button>
            <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
              <button
                type="button"
                className="btn w-100"
                style={{
                  backgroundColor: "hsl(36, 88%, 50%)",
                  color: "white",
                  fontWeight: "bold",
                  margin: "2.5px",
                  textDecoration: "none",
                }}
              >
                Back
              </button>
            </NavLink>
          </div>
        </form>

        <div className="text-center mt-3">
          <p className="mb-0">
            Remembered your password?{" "}
            <a
              href="/login"
              className="text-decoration-none"
              style={{ color: "hsl(36, 88%, 50%)" }}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
