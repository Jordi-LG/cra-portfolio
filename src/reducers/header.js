import { SHOW_NAVBAR } from 'src/actions';

export const initialState = {
  displayNavBar: false,
};

// le reducer est une fonction qui retourne TOUJOURS un state
// elle prend en entrée le state courant et une action/intention
const header = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_NAVBAR:
      return {
        ...state,
        displayNavBar: !state.displayNavBar,
      };
    default:
      return state;
  }
};

export default header;
