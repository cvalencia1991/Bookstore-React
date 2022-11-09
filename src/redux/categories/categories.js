const CHECK_STATUS = 'CHECK_STATUS';

// Reducer
export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}

// Action creators
export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
