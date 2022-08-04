import {catchError, from, map, mergeMap, of} from "rxjs";
import {ofType} from "redux-observable";
import FakeBackendService from "../../service/FakeBackendService";
import {
    getAllProductActionFailed,
    getAllProductActionRequest,
    getAllProductActionSuccess
} from "../reducer/allProductSlice";

export const allProductRequestEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(getAllProductActionRequest),
        mergeMap((action: any) =>
            from(
                FakeBackendService.getAllProduct()
            ).pipe(
                map((response: any) => {
                    if (response.data) {
                        return getAllProductActionSuccess(response.data);
                    } else {
                        throw response;
                    }
                }),
                catchError((err) => {
                    let result = {
                        message: err
                    }
                    return of(getAllProductActionFailed(result));
                })
            )
        )
    );
};