//Hooks
import { useForm } from "../hooks/useForm";
//Router
import { useNavigate } from "react-router-dom";

export const RegisterScreen = () => {
  const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://testbookhelio.herokuapp.com/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name,
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
          alert("User created successfully");
          navigate("/login");
        }
        if (data.ok === false) {
          alert(
            "The username or password already exists, the username has not been created"
          );
        }
      });
  };
  return (
    <div className="register-screen">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register__form">
        <label className="register__form--labels" htmlFor="name">
          Name
        </label>
        <input
          className="register__form--inputs"
          onChange={handleInputChange}
          name="name"
          id="name"
          type="text"
          value={name}
        />
        <label className="register__form--labels" htmlFor="email">
          Email
        </label>
        <input
          className="register__form--inputs"
          onChange={handleInputChange}
          name="email"
          id="email"
          type="text"
          value={email}
        />
        <label className="register__form--labels" htmlFor="password">
          Password
        </label>
        <input
          className="register__form--inputs"
          onChange={handleInputChange}
          name="password"
          id="password"
          type="password"
          value={password}
        />
        <button className="register__form--btn-submit" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
