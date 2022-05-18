
export default function initInterceptors(httpService) {
    httpService.interceptors.request.use((request) => {
        // if (typeof window !== 'undefined' && AuthHelper.isAuthenticated()) {
        //     request.headers.token = `${AuthHelper.getToken()}`;
        //     request.headers.UserId = `${AuthHelper.getLoggedInUserData().id}`;
        // }
        return request;
    });

    httpService.interceptors.response.use(
        (res) => res,
        (error) => {
            if (error.response) {
                // handleError(error.response.status);
            }
            return Promise.reject(error);
        }
    );
}
