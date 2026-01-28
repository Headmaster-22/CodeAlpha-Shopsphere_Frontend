import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../api";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const userObject = {
    username: username,
    first_name: firstname,
    last_name: lastname,
    password: password,
  };

  async function createUser(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await api.post("register_user/", userObject);
      if (response.status === 200) {
        toast.success("Account created successfully!");
        navigate("/login");
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error("Username already exists");
        return;
      }
      toast.error(err.message);
    }
  }

  return (
    <div className="login-container my-5">
      <div className="login-card shadow">
        <h2 className="login-title">Create an account</h2>
        <p className="login-subtitle">Become a valued member at Shopsphere!</p>
        <form onSubmit={createUser}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="Enter your first name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Enter your last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirm_password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Create Account
          </button>
        </form>

        <div className="login-footer">
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
