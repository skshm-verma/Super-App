import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image13 from "../../../public/assets/image13.png";
import './Home.css'

const Form = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
    checkbox: false,
  });

  const [error, setError] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
    checkbox: false,
  });

  function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10}$/; // a regular expression to check the validation of phone No
    return phoneRegex.test(phone);
  }

  function validate() {
    let isError = false;

    setError((error) => ({
      name: "",
      userName: "",
      email: "",
      phone: "",
      checkbox: false,
    }));

    if (data.name.trim().length === 0) {
      console.warn("Name is required");
      setError((error) => {
        return { ...error, name: "Name is required" };
      });
      isError = true;
    }

    if (data.userName.trim().length === 0) {
      console.warn("UserName is required");
      setError((error) => {
        return { ...error, userName: "UserName is required" };
      });
      isError = true;
    }

    if (data.email.trim().length === 0) {
      console.warn("Email is required");
      setError((error) => {
        return { ...error, email: "Email is required" };
      });
      isError = true;
    }

    if (data.phone.trim().length === 0 || !validatePhone(data.phone)) {
      console.warn("Phone number is either empty or invalid");
      setError((error) => {
        return { ...error, phone: "Phone number is either empty or invalid" };
      });
      isError = true;
    }

    if (!data.checkbox) {
      console.warn("Checkbox is required");
      setError((error) => {
        return { ...error, checkbox: "Checkbox is required" };
      });
      isError = true;
    }

    if (!isError) {
      console.log("Valid Data");
      localStorage.setItem("formData", JSON.stringify(data));
      navigate("/movies");
    }
  }

  return (
    <div style={{ display: "flex", background: "black" }}>
      <div style={{ position: "relative" }}>
        <p className ="part1ParaStyle">
          Discover new things on <br />
          Superapp
        </p>
        <img
          src={image13}
          alt="MusicFestivalPhoto"
          style={{ width: "40vw", height: "100vh" }}
        />
      </div>

      <div className="part2Style">
        <h1
          style={{
            color: "#72DB73",
            fontFamily: "Single Day ,cursive",
            margin: "15px auto",
            fontSize : '3rem'
          }}
        >
          Super App
        </h1>
        <h4 
        style={{ 
          color: "white", 
          margin: "0px auto 20px auto",
          fontSize : '14px'
           }}>
          Create your new account
        </h4>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            validate();
          }}
          className ="formStyle"
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            value={data.name}
            onInput={(e) => setData({ ...data, name: e.target.value })}
            className ="inputStyle"
          />
          {error.name && (
            <span style={{ color: "red", fontSize: "0.8rem" }}>
              {error.name}
            </span>
          )}

          <input
            type="text"
            name=""
            id=""
            placeholder="UserName"
            value={data.userName}
            onInput={(e) => setData({ ...data, userName: e.target.value })}
            className ="inputStyle"
          />
          {error.userName && (
            <span style={{ color: "red", fontSize: "0.8rem" }}>
              {error.userName}
            </span>
          )}

          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            value={data.email}
            onInput={(e) => setData({ ...data, email: e.target.value })}
            className ="inputStyle"
          />
          {error.phone && (
            <span style={{ color: "red", fontSize: "0.8rem" }}>
              {error.email}
            </span>
          )}

          <input
            type="tel"
            name=""
            id=""
            placeholder="Phone"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            className ="inputStyle"
          />
          {error.phone && (
            <span style={{ color: "red", fontSize: "0.8rem" }}>
              {error.phone}
            </span>
          )}

          <label style={{ width: "320px" }}>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={data.checkbox}
              onChange={(e) => setData({ ...data, checkbox: e.target.checked })}
              style={{ margin: "12px auto" }}
            />
            <p
              style={{
                color: "white",
                display: "inline-block",
                margin: "auto 5px",
              }}
            >
              Share my registration data with Superapp
            </p>
          </label>
          {error.checkbox && (
            <span style={{ color: "red", fontSize: "0.8rem" }}>
              {error.checkbox}
            </span>
          )}

          <button type="submit" className="buttonStyle">
            Sign Up
          </button>
        </form>

        <p className="part2ParaStyle">
          By clicking on Sign up. you agree to Superapp{" "}
          <span className="AppColor">Terms and Conditions of Use</span>
        </p>

        <p className="part2ParaStyle">
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp{" "}
          <span className="AppColor">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Form;
