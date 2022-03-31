//Vendor
import { useContext, useEffect, useState } from "react";
//Components
import { Card } from "../components/books-screen/Card";
//Context
import { BooksContext } from "../contexs/BooksContex";

export const BooksScreen = () => {
  const { dataResultBooks, setDataResultBooks } = useContext(BooksContext);
  const [dataResultAuthors, setDataResultAuthors] = useState([]);

  useEffect(() => {
    fetch("https://testbookhelio.herokuapp.com/api/events/books")
      .then((response) => response.json())
      .then((data) => {
        return setDataResultBooks(data.books);
      });
  }, []);

  useEffect(() => {
    fetch("https://testbookhelio.herokuapp.com/api/events/Authors")
      .then((response) => response.json())
      .then((data) => {
        return setDataResultAuthors(data.author);
      });
  }, []);

  if (dataResultBooks.length === 0) {
    return null;
  }

  if (dataResultAuthors.length === 0) {
    return null;
  }
  return (
    <>
      <main className="books-screen">
        <h2 className="books-screen__title">Books Viewer</h2>
        <div className="books-screen__grid">
          {dataResultBooks.map((value) => {
            return (
              <Card
                key={value._id}
                author={value.author}
                isbn={value.isbn}
                nameBook={value.name}
                id={value._id}
              />
            );
          })}
        </div>

        <h2 className="books-screen__title">Authors Viewer</h2>
        <div className="books-screen__grid">
          {dataResultAuthors.map((value) => {
            return (
              <Card
                key={value._id}
                firstName={value.first_name}
                lastName={value.last_name}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};
