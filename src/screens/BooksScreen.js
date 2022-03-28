//data
import data from "../data.json";
//Components
import { BookCard } from "../components/books-screen/BookCard";

export const BooksScreen = () => {
  console.log(data);
  return (
    <>
      <main className="books-screen">
        <h2 className="books-screen__title">Book Viewer</h2>
        <div className="books-screen__grid">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </main>
    </>
  );
};
