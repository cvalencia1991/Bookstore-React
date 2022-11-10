import { configureStore } from '@reduxjs/toolkit';
import CheckingReducer from './categories/categories';
import reducer from './books/books';

const store = configureStore({
  reducer: {
    book: reducer,
    status: CheckingReducer,
  },
});
export default store;
