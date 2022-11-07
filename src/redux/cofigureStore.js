import { configureStore } from '@reduxjs/toolkit';
import CheckingReducer from './categories/categories';
import BooksReducer from './books/books';

const store = configureStore({
  reducer: {
    book: BooksReducer,
    status: CheckingReducer,
  },
});

module.exports = store;
