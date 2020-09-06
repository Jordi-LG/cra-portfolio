import projects from 'src/datas/projects';

const initialState = {
  projectsDatas: projects,
};

// le reducer est une fonction qui retourne TOUJOURS un state
// elle prend en entrée le state courant et une action/intention
const works = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default works;
