//Vendor
import { useContext } from "react";
//Router
import { useNavigate } from "react-router";
//Context
import { BooksContext } from "../../contexs/BooksContex";

export const Card = ({ nameBook, id }) => {
  const { setIdBook } = useContext(BooksContext);
  const navigate = useNavigate();
  const handleTarget = ({ target }) => {
    if (target.value !== undefined) navigate("/detailedbook");
    setIdBook(target.value);
  };

  return (
    <button onClick={handleTarget} value={id} className="book-card">
      <span value={id} className="book-card__items--title">
        Name of the book:
      </span>
      <span value={id} className="book-card__items">
        {nameBook}
      </span>
    </button>
  );
};
