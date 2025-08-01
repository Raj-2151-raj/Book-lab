// book-lab/src/components/BrowseBooks.jsx
// This component allows users to browse and search for books in the collection.
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import booksData from "../utils/booksData";

const BrowseBooks = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  function handleSearch() {
    const results = booksData.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(results);
  }

  useEffect(() => {
    // Reset to all books if searchText is cleared
    if (searchText === "") {
      setFilteredBooks(booksData);
    }
  }, [searchText]);

  return (
    <>
    <div className="flex flex-col items-center justify-center mt-16 px-4 mb-60">
      <motion.div  initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Browse The Books
      </h1>

      <div className="flex items-center space-x-4   justify-center mt-16 px-4 m-20">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search books..."
          className="bg-gray-50 px-4 py-2 w-104 rounded-md border border-gray-300 shadow-sm  focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-700 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-800 transition"
        >
          Search
        </button>
      </div>

      {filteredBooks.length > 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-6">
          {filteredBooks.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition "
            >
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
                className="w-70 h-60 rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {book.title}
              </h3>
              <p className="text-gray-600">by {book.author}</p>
              </motion.div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No books to display.</p>
      )}
      </motion.div>
    </div>
</>
  );
};

export default BrowseBooks;
