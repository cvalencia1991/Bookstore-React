import { configureStore } from '@reduxjs/toolkit';
import CheckingReducer from './categories/Categories';
import BooksReducer from './books/Books';

const store = configureStore({
  reducer: {
    book: BooksReducer,
    status: CheckingReducer,
  },
});

module.exports = store;
