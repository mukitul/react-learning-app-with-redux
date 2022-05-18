export const authActions = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    POPULATE_USER_SESSION: 'POPULATE_USER_SESSION',
};
export const loginRequest = (payload: any) => {
    return {
        type: authActions.LOGIN_REQUEST,
        payload,
    };
};
export const loginSuccess = (payload: any) => {
    console.log(payload);
    return {
        type: authActions.LOGIN_SUCCESS,
        payload,
    };
};
export const loginFailed = (payload: any) => {
    return {
        type: authActions.LOGIN_FAILED,
        payload,
    };
};
export const logoutRequest = () => {
    return {
        type: authActions.LOGOUT_REQUEST,
    };
};
export const populateUserSession = (payload: any) => {
    return {
        type: authActions.POPULATE_USER_SESSION,
        payload,
    };
};