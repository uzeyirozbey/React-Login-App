import { userConstants } from '../_constants';

let kullanici = JSON.parse(localStorage.getItem('kullanici'));
const initialState = kullanici ? { loggedIn: true, kullanici } : {};
export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        kullanici: action.kullanicilar
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        kullanici: action.kullanicilar
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}