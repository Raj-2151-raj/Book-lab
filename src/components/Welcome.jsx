import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from "../utils/categories";
import PopularBooks from "./PopularBooks";
import { motion } from "framer-motion";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-screen bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl">
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 text-white"
        ><h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight 
 bg-gradient-to-r from-orange-400 via-pink-500 to-red-400

  bg-clip-text text-transparent drop-shadow-lg">
  Welcome to the Online Library System!
  <br />
  <span className="text-2xl md:text-3xl mt-4 block font-semibold text-gray-100 drop-shadow-md">
    Your gateway to knowledge, imagination, and discovery!
  </span>
</h1>

        </motion.div>
      </div>

      {/* Category Section */}
      <div className=" py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8"> Explore Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              onClick={() => navigate(cat.path)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}  
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 text-center"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className={`text-xl font-semibold ${cat.color}`}>{cat.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{cat.desc}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                Explore
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Books Section */}
      <div className="bg-slate-50 py-12 px-6">
        <PopularBooks />
      </div>
    </div>
  );
};

export default Welcome;
