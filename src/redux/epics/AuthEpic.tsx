import {ofType} from 'redux-observable';
import {catchError, from, ignoreElements, map, mergeMap, of} from 'rxjs';
import api from '../../apiClient';
import {authActions, loginFailed, loginSuccess} from '../actions/AuthAction';
import history from '../../history';

export const loginRequestEpic = (action$: any, state$: any) => {
    console.log("loginRequestEpic");
    return action$.pipe(
        ofType(authActions.LOGIN_REQUEST),
        mergeMap((action: any) =>
            from(
                api.post(`host/api/v1/account/login`, {
                    userName: action.payload?.username,
                    password: action.payload?.password,
                })
            ).pipe(
                map((response) => {
                    if (response.data.isResult) {
                        return loginSuccess();
                    } else {
                        throw response;
                    }
                }),
                catchError((err) => {
                    const result = {
                        message: 'Something went wrong. Please try again later.',
                    };
                    return of(loginFailed(result));
                })
            )
        )
    );
};

export const loginSuccessEpic = (action$: any, state$: any, {history}: any) => {
    console.log("loginSuccessEpic");
    return action$.pipe(
        ofType(authActions.LOGIN_SUCCESS),
        map(() => {history.push("/home");}),
        ignoreElements()
    );
};

export const logoutRequestEpic = (action$: any, state$: any, dependencies: any) => {
    return action$.pipe(
        ofType(authActions.LOGOUT_REQUEST),
        map(() => {
            //AuthHelper.clearSessionData();
            history.push('/home');
        }),
        ignoreElements()
    );
};