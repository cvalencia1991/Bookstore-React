const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REM_BOOK = 'bookstore/books/REMOVE_BOOK';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REM_BOOK:
      return [
        state.filter((item) => item !== action.payload),
      ];
    default:
      return state;
  }
}

export function addBook(obj) {
  return { type: ADD_BOOK, payload: obj };
}

export function removeBook(obj) {
  return { type: ADD_BOOK, payload: obj };
}
