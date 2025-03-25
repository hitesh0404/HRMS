import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handling form submission
  const onSubmit = (data) => {
    console.log("Form submitted");
    console.log(data);
    
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email input field */}
          <div className="mb-3 d-flex flex-column">
            <label
              htmlFor="email"
              className="form-label fw-bold text-start"
              style={{ color: "#333" }}
            >
              Your email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>

          {/* Password input field */}
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                {...register("rememberMe")}
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
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/"
            >
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

        {/* Link to Sign Up Page */}
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
