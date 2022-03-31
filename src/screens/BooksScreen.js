//Vendor
import { useContext, useEffect, useState } from "react";
//Components
import { Card } from "../components/books-screen/Card";
//Context
import { BooksContext } from "../contexs/BooksContex";

export const BooksScreen = () => {
  const { dataResultBooks, setDataResultBooks } = useContext(BooksContext);

  useEffect(() => {
    fetch("https://testbookhelio.herokuapp.com/api/events/books")
      .then((response) => response.json())
      .then((data) => {
        return setDataResultBooks(data.books);
      });
  }, []);

  if (dataResultBooks.length === 0) {
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
      </main>
    </>
  );
};
