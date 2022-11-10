import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'ADD_BOOK';
const REM_BOOK = 'REM_BOOK';
const GET_BOOK = 'GET_BOOK';

export default function reducer(state = [], action = {}) {
  const list = [];
  switch (action.type) {
    case `${GET_BOOK}/fulfilled`:
      Object.keys(action.payload).forEach((element) => {
        const book = action.payload[element][0];
        book.item_id = element;
        list.push(book);
      });
      return list;
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REM_BOOK}/fulfilled`:
      return state.filter((item) => item.item_id !== action.payload);
    default:
      return state;
  }
}

export const addBook = createAsyncThunk(ADD_BOOK, async (obj) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/I7FG9kzE5B9fX61ym3BG/books/';
  await fetch(url,
    {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
  return obj;
});

export const getbook = createAsyncThunk(GET_BOOK, async () => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/I7FG9kzE5B9fX61ym3BG/books/';
  const response = await fetch(url,
    {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
      },
    });
  const result = await response.json();
  return result;
});

export const removeBook = createAsyncThunk(REM_BOOK, async (id) => {
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/I7FG9kzE5B9fX61ym3BG/books/${id}`;
  await fetch(url,
    {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: id }),
    });
  return id;
});
