import { useNavigate } from "react-router";

export const Card = ({
  author,
  isbn,
  nameBook,
  firstName,
  lastName,
  nameAuthor,
  id,
}) => {
  const navigate = useNavigate();
  const prueba = ({ target }) => {
    navigate("/detailedbook");
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
