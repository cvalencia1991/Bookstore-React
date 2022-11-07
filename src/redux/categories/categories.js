const CHECKING = 'CHECK';
export const checking = () => ({ type: CHECKING });
export default function CheckingReducer(state = [], action) {
  switch (action.type) {
    case CHECKING:
      return 'Under construction';
    default:
      return state;
  }
}
