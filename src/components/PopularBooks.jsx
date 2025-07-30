import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const PopularBooks = () => {
  const books = useSelector((state) => state.books || []); 
  const popularBooks = books.filter((book) => parseFloat(book.rating) >= 4.8);

  return (
    <div className="mb-25 m-auto items-center">
      <h2 className="text-3xl text-center font-bold mb-7">Popular Books</h2>

      {popularBooks.length === 0 ? (
        <p className="text-gray-500 text-center">No popular books available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {popularBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white m-auto p-4 rounded shadow hover:-translate-y-1 duration-500"
            >
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <img 
                src={book.coverImage} 
                alt={book.title} 
                className="w-70 h-60 rounded-xl flex flex-col items-center justify-center mb-3" 
              />
              <p className="text-gray-600">{book.author}</p>
              <p className="text-yellow-500 font-bold">⭐ {book.rating}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularBooks;
