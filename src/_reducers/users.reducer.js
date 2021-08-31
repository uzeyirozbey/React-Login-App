import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {

    //Kullanıcı list 
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.kullanicilar
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    //Kullanıcı Sil
    case userConstants.DELETE_REQUEST:
      return {
        loading: true
      };
    case userConstants.DELETE_SUCCESS:
      return {
        items: action.kullanicilar
      };
    case userConstants.DELETE_FAILURE:
      return {
        error: action.error
      };

     //Kullanıcı Detay
    case userConstants.DETAIL_REQUEST:
      return {
        loading: true
      };
    case userConstants.DETAIL_SUCCESS:
      return {
        loading: false,
        kullaniciDetay: action.kullaniciDetay
      };
    case userConstants.DETAIL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
