// import AppHelper from '../helpers/app.helper';
// import AuthHelper from '../helpers/auth.helper';

const handleError = (errorCode) => {
    if (errorCode === 401) {
        // AuthHelper.clearToken();
        // AuthHelper.clearUserData();
        // AppHelper.clearSession();
    }
    return null;
};

export default handleError;
