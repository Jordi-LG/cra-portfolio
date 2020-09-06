import { combineReducers } from 'redux';
import header from './header';
import welcome from './welcome';
import works from './works';

export default combineReducers({
  header,
  welcome,
  works,
});
