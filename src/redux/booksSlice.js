// redux/booksSlice.js

import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    setBooks: (state, action) => {
      return action.payload;
    },
    addBook: (state, action) => {
      state.push(action.payload); // ✅ Add new book to array
    },
  },
});

export const { setBooks, addBook } = booksSlice.actions; // ✅ इथे export कर
export default booksSlice.reducer;
