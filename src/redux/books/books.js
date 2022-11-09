const ADD_BOOK = 'ADD_BOOK';
const REM_BOOK = 'REM_BOOK';

const initialbooks = [
  {
    id: 1,
    title: 'Cien años de soledad',
    author: 'Gabriel garcia',
  },
  {
    id: 2,
    title: 'Rich dad,Poor dad',
    author: 'Robert T. Kiyosaki',
  },
];

export default function reducer(state = initialbooks, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REM_BOOK:
      return state.filter((item) => item.id.toString() !== action.payload.toString());
    default:
      return state;
  }
}

export function addBook(obj) {
  return { type: ADD_BOOK, payload: obj };
}

export function removeBook(obj) {
  return { type: REM_BOOK, payload: obj };
}
