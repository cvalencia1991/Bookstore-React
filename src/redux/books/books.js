/* Define action types for adding and removing a book.
    Set the initial state to be an empty array of books.
    Export Action Creators for your actions.
    Write your reducer and export it as default.
    Define state changes for the actions that you created.
    In case of unknown action - return the current state. */

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
