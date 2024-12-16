import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://gofood-6rpv.onrender.com/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });

        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);

        navigate("/");
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Invalid credentials. Please try again.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error during login:", error);

      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong. Please try again later.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-success m-3">
            Submit
          </button>
          <Link to="/createuser" className="m-3 btn btn-danger">
            I'm a new user
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
