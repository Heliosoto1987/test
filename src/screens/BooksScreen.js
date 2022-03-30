//Components
import { useEffect, useState } from "react";
import { Card } from "../components/books-screen/Card";

export const BooksScreen = () => {
  const [dataResult, setDataResult] = useState([]);
  const [dataResultAuthors, setDataResultAuthors] = useState([]);

  useEffect(() => {
    fetch("https://testbookhelio.herokuapp.com/api/events/books")
      .then((response) => response.json())
      .then((data) => {
        return setDataResult(data.books);
      });
  }, []);

  useEffect(() => {
    fetch("https://testbookhelio.herokuapp.com/api/events/Authors")
      .then((response) => response.json())
      .then((data) => {
        return setDataResultAuthors(data.author);
      });
  }, []);

  const prueba = (e) => {
    console.log("Funciono");
  };

  if (dataResult.length === 0) {
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
          {dataResult.map((value) => {
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
