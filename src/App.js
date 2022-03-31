//Vendor
import React, { useState } from "react";
//Context
import { BooksContext } from "./contexs/BooksContex";
//Router
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  const [dataResultBooks, setDataResultBooks] = useState([]);
  const [idBook, setIdBook] = useState("");
  return (
    <BooksContext.Provider
      value={{
        dataResultBooks,
        setDataResultBooks,
        idBook,
        setIdBook,
      }}
    >
      <AppRouter />
    </BooksContext.Provider>
  );
};
