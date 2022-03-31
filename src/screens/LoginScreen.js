//Hooks
import { useForm } from "../hooks/useForm";
//Router
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://testbookhelio.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok === true) {
          navigate("/book");
        }
        if (data.ok === false) {
          alert("Email or password do not exist");
        }
      });
  };
  return (
    <div className="login-screen">
      <h2>LoginScreen</h2>
      <form onSubmit={handleSubmit} className="login__form">
        <label className="login__form--label" htmlFor="email">
          Email
        </label>
        <input
          onChange={handleInputChange}
          name="email"
          id="email"
          type="text"
          value={email}
        />
        <label className="login__form--label" htmlFor="password">
          Password
        </label>
        <input
          onChange={handleInputChange}
          name="password"
          id="password"
          type="password"
          value={password}
        />
        <button className="login__form--submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
