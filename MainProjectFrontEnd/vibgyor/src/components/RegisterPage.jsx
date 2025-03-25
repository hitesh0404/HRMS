import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import "./../css/loginregister.css";

export default function RegisterPage() {
  const [data,setData] = useState(null);
  // fetch()
  // Use React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Custom password validation function
  const passwordValidation = (value) => {
    if (!/(?=.*?[A-Z])/.test(value)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/(?=.*?[a-z])/.test(value)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!/(?=.*?[0-9])/.test(value)) {
      return "Password must contain at least one digit.";
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(value)) {
      return "Password must contain at least one special character.";
    }
    if (value.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    return true; // return true if all conditions are met
  };

  
  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form submitted", data);

  };

  return (
    <div className="overlay d-flex justify-content-center align-items-center vh-100">
      <div
        className="main-form p-5 rounded-4 shadow-lg"
        style={{ backgroundColor: "white", maxWidth: "500px", width: "100%" }}
      >
        <h2 className="text-center mb-4" style={{ color: "hsl(36, 88%, 50%)" }}>
          Create an Account
        </h2>

        {/* Register Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
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
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "The length should be min 3 character long",
                },
              })}
            />
            {errors.fullName && (
              <p style={{ color: "red" }}>{errors.fullName.message}</p>
            )}
          </div>

          {/* Email Address */}
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
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
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                validate: passwordValidation,
              })}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
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
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms & Conditions */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                {...register("terms", {
                  required: "You must agree to the terms & conditions",
                })}
              />
              <label htmlFor="terms" className="form-check-label">
                I agree to the terms & conditions
              </label>
            </div>
            {errors.terms && (
              <p style={{ color: "red" }}>{errors.terms.message}</p>
            )}
          </div>

          {/* Submit Button */}
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

        {/* Already have an account link */}
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
