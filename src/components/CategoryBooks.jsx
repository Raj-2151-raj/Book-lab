// src/components/CategoryBooks.jsx
import React from "react";
import { useParams } from "react-router-dom";
import booksData from "../utils/booksData";
import { motion } from "framer-motion";

const CategoryBooks = () => {
  const { categoryName } = useParams();
  const filteredBooks = booksData.filter(
    (book) => book.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="p-4">
      {/* Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-bold mb-10 mt-10 text-center text-4xl">
          {categoryName} Books
        </h2>
      </motion.div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBooks.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white m-auto p-4 rounded shadow hover:-translate-y-1 duration-500"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-70 h-60 rounded-xl mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold text-center">{book.title}</h3>
            <p className="text-sm text-gray-600 text-center">by {book.author}</p>
            <p className="text-sm text-gray-500 text-center">
              Rating: {book.rating}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
