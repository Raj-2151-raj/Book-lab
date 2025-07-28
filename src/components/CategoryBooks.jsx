
// src/components/CategoryBooks.jsx
// This component displays books filtered by category based on the URL parameter.
import React from "react";
import { useParams } from "react-router-dom";
import booksData from "../utils/booksData";

const CategoryBooks = () => {
  const { categoryName } = useParams();
  const filteredBooks = booksData.filter(
    (book) => book.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="p-4 hover:-translate-y-1 duration-500">
      <h2 className=" font-bold mb-19 mt-10 text-center text-4xl">{categoryName} Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <div key={book.id} className=" rounded-lg m-auto shadow justify-center items-center">
            <img src={book.coverImage} alt="" className='w-70 h-60 rounded-xl flex flex-col  items-center justify-center' />
            <h3 className="text-lg font-semibold text-center ">{book.title}</h3>
            <p className="text-sm text-gray-600 text-center">by {book.author}</p>
            <p className="text-sm text-gray-500 text-center">Rating: {book.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
