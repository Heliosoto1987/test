//hooks
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

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
      });
  };
  return (
    <div className="login-screen">
      <div>LoginScreen</div>
      <form onSubmit={handleSubmit} className="login__form">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleInputChange}
          name="email"
          id="email"
          type="text"
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleInputChange}
          name="password"
          id="password"
          type="password"
          value={password}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
