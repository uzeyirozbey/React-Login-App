import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
export const userActions = {
    login,
    logout,
    getAll,
    userDelete,
    userDetail
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        userService.login(username, password)
            .then(
                kullanici => { 
                    dispatch(success(kullanici));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(kullanici)  { return { type: userConstants.LOGIN_REQUEST, kullanici } }
    function success(kullanici)  { return { type: userConstants.LOGIN_SUCCESS, kullanici } }
    function failure(error)      { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());
        userService.getAll()
            .then(
                kullanicilar => dispatch(success(kullanicilar)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request()             { return { type: userConstants.GETALL_REQUEST } }
    function success(kullanicilar) { return { type: userConstants.GETALL_SUCCESS, kullanicilar } }
    function failure(error)        { return { type: userConstants.GETALL_FAILURE, error } }
}


function userDelete(id) {
    return dispatch => {
        dispatch(request());
        userService.userDelete(id)
        .then(
            kullanicilar => dispatch(success(kullanicilar)),
            error => dispatch(failure(error.toString())),
        );
    };
    function request()             { return { type: userConstants.DELETE_REQUEST } }
    function success(kullanicilar) { return { type: userConstants.DELETE_SUCCESS, kullanicilar } }
    function failure(error)        { return { type: userConstants.DELETE_FAILURE, error } }
}

function userDetail(id) {
    return dispatch => {
        dispatch(request());
        userService.userDetail(id)
        .then(
            kullaniciDetay => dispatch(success(kullaniciDetay)),
            error => dispatch(failure(error.toString()))
            
        );
    };
    function request()               { return { type: userConstants.DETAIL_REQUEST } }
    function success(kullaniciDetay) { return { type: userConstants.DETAIL_SUCCESS, kullaniciDetay } }
    function failure(error)          { return { type: userConstants.DETAIL_FAILURE, error } }
}
