const ADD_BOOK = 'ADD_BOOK';
const REM_BOOK = 'REM_BOOK';

const initialbooks = [
  {
    id: 0,
    title: 'Cien años de soledad',
    author: 'Gabriel garcia',
  },
  {
    id: 1,
    title: 'Rich dad,Poor dad',
    author: 'Robert T. Kiyosaki',
  },
];

export default function reducer(state = initialbooks, action = {}) {
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
  return { type: REM_BOOK, payload: obj };
}
