const ADD = 'ADD';
const REMOVE = 'REMOVE';

export const addBook = () => ({ type: ADD });
export const RemoveBook = () => ({ type: REMOVE });

export default function BooksReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      addBook();
      break;
    case REMOVE:
      RemoveBook();
      break;
    default:
      return state;
  }
}
