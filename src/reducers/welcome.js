import socialButtonsDatas from 'src/datas/socialButtons';

const initialState = {
  socialButtons: socialButtonsDatas,
};

// le reducer est une fonction qui retourne TOUJOURS un state
// elle prend en entrée le state courant et une action/intention
const welcome = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default welcome;
