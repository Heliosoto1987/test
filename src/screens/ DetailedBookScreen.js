import React from "react";
import { useNavigate } from "react-router";

export const DetailedBookScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/book")}>Back</button>
      <div>Nombre Del Libro</div>
      <div>Nombre Del Autor</div>
      <div>Numero de isbn</div>
    </div>
  );
};
