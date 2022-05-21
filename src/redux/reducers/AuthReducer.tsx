import {authActions} from '../actions/AuthAction';

const initialLoginState = {
    user: {},
    token: '',
    isLoading: true,
    error: {},
    isReady: false,
};

const AuthReducer = (state = initialLoginState, action: any) => {
    console.log(state);
    switch (action?.type) {
        case authActions.LOGIN_REQUEST:
            return {...state, user: null, isLoading: true};
        case authActions.LOGIN_SUCCESS:
            return {
                ...state,
                user:null,
                isLoading: false,
                error: null,
            };
        case authActions.LOGIN_FAILED:
            return {
                ...state,
                user: {},
                token: '',
                isLoading: false,
                error: action.payload,
            };
        case authActions.LOGOUT_REQUEST:
            return {
                ...state,
                user: {},
                token: '',
                isLoading: false,
                error: null,
            };
        case authActions.POPULATE_USER_SESSION:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLoading: false,
                error: null,
                isReady: true,
            };
        default:
            return state;
    }
};
export default AuthReducer;