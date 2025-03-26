import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import "./../css/loginregister.css";
import APIROOT from "..";
export default function RegisterPage() {
  const [data, setData] = useState(null);
  const [roles, setRole] = useState([]);
  const [departments, setDepartment] = useState([]);
  const [managers, setManager] = useState([]);
  useEffect(() => {
    fetch(APIROOT + "/combined-data/")
      .then((response) => response.json())
      .then((data) => {
        // Assuming combined data includes role, department, manager
        setRole(data.roles || []);
        setDepartment(data.departments || []);
        setManager(data.managers || []);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

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
          {/* First Name */}
          <div className="mb-3 d-flex flex-column">
            <label
              htmlFor="firstname"
              className="form-label fw-bold text-start"
              style={{ color: "#333" }}
            >
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="Enter your First Name"
              {...register("first_name", {
                required: "First Name is required",
                minLength: {
                  value: 3,
                  message: "The length should be min 3 character long",
                },
              })}
            />
            {errors.first_name && (
              <p style={{ color: "red" }}>{errors.first_name.message}</p>
            )}
          </div>
          {/* Last Name */}
          <div className="mb-3 d-flex flex-column">
            <label
              htmlFor="lastname"
              className="form-label fw-bold text-start"
              style={{ color: "#333" }}
            >
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Enter your Last Name"
              {...register("last_name", {
                required: "Last Name is required",
                minLength: {
                  value: 2,
                  message: "The length should be min 2 character long",
                },
              })}
            />
            {errors.last_name && (
              <p style={{ color: "red" }}>{errors.last_name.message}</p>
            )}
          </div>
          {/* Username */}
          <div className="mb-3 d-flex flex-column">
            <label
              htmlFor="Username"
              className="form-label fw-bold text-start"
              style={{ color: "#333" }}
            >
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your Username"
              {...register("username", {
                required: "username is required",
                minLength: {
                  value: 3,
                  message: "The length should be min 3 character long",
                },
              })}
            />
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username.message}</p>
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
          {/* Contact Details */}
          <div className="mb-3 d-flex flex-column">
            <label
              htmlFor="contact_details"
              className="form-label fw-bold text-start"
              style={{ color: "#333" }}
            >
              Contact Details
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.contact_details ? "is-invalid" : ""
              }`}
              id="contact_details"
              placeholder="Enter your Contact Details"
              {...register("contact_details", {
                required: "Contact Details are required",
                pattern: {
                  value: /^(?:\+91[-\s]?)?[0]?(?:\d{10})$/, // Updated phone number validation regex for flexibility
                  message: "Please enter a valid 10-digit phone number",
                },
                minLength: {
                  value: 10,
                  message:
                    "The phone number should be at least 10 characters long",
                },
                maxLength: {
                  value: 13,
                  message: "The phone number should not exceed 13 characters",
                },
              })}
            />
            {errors.contact_details && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {errors.contact_details.message}
              </div>
            )}
          </div>
          {/* Gender Dropdown */}
          <div className="mb-3 d-flex flex-column">
            <label
              htmlFor="gender"
              className="form-label fw-bold text-start"
              style={{ color: "#333" }}
            >
              Gender
            </label>
            <select
              className={`form-select ${errors.gender ? "is-invalid" : ""}`} // Dynamic invalid class
              id="gender"
              {...register("gender", {
                required: "Gender is required",
              })}
            >
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
              <option value="N">Prefer not to say</option>
            </select>
            {errors.gender && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {errors.gender.message}
              </div>
            )}
          </div>
          {/* Date of Birth (DOB) */}
          <div className="mb-3 d-flex flex-column">
            <label
              htmlFor="dob"
              className="form-label fw-bold text-start"
              style={{ color: "#333" }}
            >
              Date of Birth
            </label>
            <input
              type="date"
              className={`form-control ${errors.dob ? "is-invalid" : ""}`} // Dynamic invalid class
              id="dob"
              {...register("dob", {
                required: "Date of Birth is required",
                validate: {
                  isAdult: (value) => {
                    // Check if the user is at least 18 years old
                    const today = new Date();
                    const birthDate = new Date(value);
                    const age = today.getFullYear() - birthDate.getFullYear();
                    const month = today.getMonth() - birthDate.getMonth();
                    return (
                      age > 18 ||
                      (age === 18 && month >= 0) ||
                      "You must be at least 18 years old"
                    );
                  },
                },
              })}
            />
            {errors.dob && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {errors.dob.message}
              </div>
            )}
          </div>
          {/* Role Dropdown */}
          <div className="mb-3">
            <label htmlFor="role" className="form-label fw-bold">
              Role
            </label>
            <select
              id="role"
              className="form-control"
              {...register("role", { required: "Role is required" })}
            >
              <option value="">Select Role</option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.RoleName}
                </option>
              ))}
            </select>
            {errors.role && (
              <p style={{ color: "red" }}>{errors.role.message}</p>
            )}
          </div>

          {/* Department Dropdown */}
          <div className="mb-3">
            <label htmlFor="department" className="form-label fw-bold">
              Department
            </label>
            <select
              id="department"
              className="form-control"
              {...register("department", {
                required: "Department is required",
              })}
            >
              <option value="">Select Department</option>
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.dept_name}
                </option>
              ))}
            </select>
            {errors.department && (
              <p style={{ color: "red" }}>{errors.department.message}</p>
            )}
          </div>

          {/* Manager Dropdown */}
          <div className="mb-3">
            <label htmlFor="manager" className="form-label fw-bold">
              Manager
            </label>
            <select
              id="manager"
              className="form-control"
              {...register("manager", { required: "Manager is required" })}
            >
              <option value="">Select Manager</option>
              {managers.map((manager) => (
                <option key={manager.id} value={manager.id}>
                  {manager.username} {manager.last_name}
                </option>
              ))}
            </select>
            {errors.manager && (
              <p style={{ color: "red" }}>{errors.manager.message}</p>
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
