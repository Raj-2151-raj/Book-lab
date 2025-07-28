import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice'; // ✅ with "s"

import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    category: '',
    rating: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new book object
    const newBook = {
      id: Date.now(),
      ...formData
    };

    dispatch(addBook(newBook));
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6  rounded shadow bg-slate-100 ">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Plus size={28} /> Add New Book
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          rows="4"
          required
        ></textarea>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        >
          <option value="">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <input
          type="number"
          name="rating"
          placeholder="Rating (e.g. 4.5)"
          value={formData.rating}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          min="0"
          max="5"
          step="0.1"
          required
        />
       <div className="flex justify-center items-center mt-8">
         <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
        >
          Add Book
        </button>
       </div>
      </form>
    </div>
  );
};

export default AddBook;
