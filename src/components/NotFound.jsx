// src/components/NotFound.jsx
// This component displays a 404 Not Found page when a user navigates to a non-existent route.
import { motion } from 'framer-motion';
import React from 'react';
import { useLocation, Link } from 'react-router-dom'; 
const NotFound = () => {
  const location = useLocation();

  return (
    
    <div className="text-center mt-55 m-auto">
      <motion.div 
       initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
       <h1 className="text-4xl font-bold text-red-600 mb-2">Opps!!</h1>
    
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-700 mt-4">
        No page found at <code className="bg-gray-100 p-1 rounded">{location.pathname}</code>
      </p>
      <Link
        to="/"
        className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
      >
        Go to Home
      </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
