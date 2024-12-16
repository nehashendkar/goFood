import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://gofood-6rpv.onrender.com/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      });

      if (!response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `Error: ${response.statusText}`,
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      const json = await response.json();

      if (!json.success) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Invalid credentials. Please try again.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have successfully signed up!",
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      console.error("Error during signup:", error);
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
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={onChange}
            required
          />
        </div>

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
            required
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
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputAddress1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="geolocation"
            value={credentials.geolocation}
            onChange={onChange}
            id="exampleInputAddress"
            required
          />
        </div>

        <button type="submit" className="btn btn-success m-3">
          Submit
        </button>
        <Link to="/login" className="m-3 btn btn-danger">
          Already a user
        </Link>
      </form>
    </div>
  );
}
