// book-lab/src/App.jsx
// This is the main application component that sets up routing and state management.


import React, { useEffect } from 'react';

import Header from './components/Header';
import Welcome from './components/Welcome';
import BrowseBooks from './components/BrowseBooks';
import CategoryBooks from './components/CategoryBooks';
import AddBook from './components/AddBook';
import Contact from './components/Contactt';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBooks } from './redux/booksSlice';
import booksData from './utils/booksData';
import Layout from './components/Layout';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBooks(booksData));
  }, [dispatch]);

  return (
    <>
      <ScrollToTop />
      {/* <Nav /> */}

   <Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Welcome />} />
    <Route path="/browse" element={<BrowseBooks />} />
    <Route path="/add-book" element={<AddBook />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/category/:categoryName" element={<CategoryBooks />} />
  </Route>
  
  <Route path="*" element={<NotFound />} />
</Routes>
    </>
  );
}

export default App;

