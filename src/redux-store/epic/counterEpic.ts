import {catchError, from, map, mergeMap, of} from "rxjs";
import {incrementAction, incrementActionFailed, incrementActionRequest} from "../reducer/counterSlice";
import {ofType} from "redux-observable";
import FakeBackendService from "../../service/FakeBackendService";

export const counterIncrementEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(incrementActionRequest),
        mergeMap((action: any) =>
            from(
                FakeBackendService.getCountryList()
            ).pipe(
                map((response: any) => {
                    console.log("ci")
                    if (response) {
                        return incrementAction();
                    } else {
                        throw response;
                    }
                }),
                catchError((err) => {
                    return of(incrementActionFailed());
                })
            )
        )
    );
};