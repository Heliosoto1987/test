//hooks
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

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
        console.log(data);
        if (data.ok === true) {
          alert("Usuario Creado con exito");
          navigate("/login");
        }
        if (data.ok === false) {
          alert("Usuario o Contraseña ya existen, Usuario no ha sido creado");
        }
      });
  };
  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit} className="login__form">
        <label htmlFor="name">name</label>
        <input
          onChange={handleInputChange}
          name="name"
          id="name"
          type="text"
          value={name}
        />
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
    </>
  );
};
