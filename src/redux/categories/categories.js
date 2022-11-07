/* Define an action type for checking the status.
Set the initial state to be an empty array of categories.
Export Action Creators for your actions.
Write your reducer and export it as default.
For the check status action return a string "Under construction".
In case of unknown action - return the current state. */

const CHECKING = 'CHECK';
export const checking = () => ({ type: CHECKING });
export default function Categories(state = [], action) {
  switch (action.type) {
    case CHECKING:
      return 'Under construction';
    default:
      return state;
  }
}
