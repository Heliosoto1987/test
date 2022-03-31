//Vendor
import { useContext } from "react";
//Router
import { useNavigate } from "react-router";
//Context
import { BooksContext } from "../../contexs/BooksContex";

export const Card = ({ nameBook, firstName, lastName, id }) => {
  const { setIdBook } = useContext(BooksContext);
  const navigate = useNavigate();
  const prueba = ({ target }) => {
    navigate("/detailedbook");
    setIdBook(target.value);
  };

  return (
    <button onClick={prueba} value={id} className="book-card">
      {nameBook ? (
        <>
          <span className="book-card__items--title">Name of the book:</span>
          <span className="book-card__items">{nameBook}</span>
        </>
      ) : (
        <>
          <span className="book-card__items--title">Name of the Author</span>
          <span className="book-card__items">{firstName}</span>
          <span className="book-card__items">{lastName}</span>
        </>
      )}
    </button>
  );
};
