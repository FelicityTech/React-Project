import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const handlePasswordChange = (event) => {
    setPassword({
      value: event.target.value,
      isTouched: true,
    });
  }
  const getIsFormValid = () => {
    return(
    firstName.trim() !== "" &&
    validateEmail(email) &&
    password.value.length >= 8 &&
    role !== "role"
    );
  
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false});
    setRole("role");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (getIsFormValid()) {
      alert("Account created!");
      clearForm();
    } else {
    alert("Please fill in all required fields correctly.")
  }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" 
            value={firstName}
            required 
            onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="Field">
            <label>Last name <sup>*</sup></label>
            <input placeholder="Last name" 
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" 
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input type="password" 
            placeholder="Password"
            required
            value={password.value}
            onChange={handlePasswordChange}
            />
            {password.isTouched && password.value.length < 8 && <PasswordErrorMessage />}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select 
            value={role}
            onChange={(e) => setRole(e.target.value)}
            >
              <option value="role">
                Role
                </option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
