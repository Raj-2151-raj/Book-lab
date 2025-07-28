// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice'; // bookSlice.jsx नाव असेल तर change कर

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
