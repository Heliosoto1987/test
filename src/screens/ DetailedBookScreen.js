//Vendor
import { useContext, useEffect, useState } from "react";
//Router
import { useNavigate } from "react-router";
//Context
import { BooksContext } from "../contexs/BooksContex";

export const DetailedBookScreen = () => {
  const [paintingDetails, setPaintingDetails] = useState("");
  const { dataResultBooks, idBook } = useContext(BooksContext);

  useEffect(() => {
    return setPaintingDetails(
      dataResultBooks.filter((value) => value._id === idBook)
    );
  }, [idBook]);
  const navigate = useNavigate();
  return (
    <div className="detailbook-screen">
      <button
        className="detailbook-screen__btn-back"
        onClick={() => navigate("/book")}
      >
        Back
      </button>
      <div className="detailbook-screen__box">
        <div className="detailbook-screen__box--items">
          <h4>Name of the book:</h4>
          {paintingDetails[0]?.name}
        </div>
        <div className="detailbook-screen__box--items">
          <h4>Name of the Author:</h4>
          {paintingDetails[0]?.author}
        </div>
        <div className="detailbook-screen__box--items">
          <h4>ISBN number</h4>
          {paintingDetails[0]?.isbn}
        </div>
      </div>
    </div>
  );
};
