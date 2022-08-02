import {from, mergeMap, map, catchError, of} from "rxjs";
import {incrementByAmountAction} from "../reducer/counterSlice";
import {ofType} from "redux-observable";

export const counterIncrementEpic = (action$:any, state$:any) => {
    return action$.pipe(
        ofType(incrementByAmountAction),
        mergeMap((action: any) =>
            from(
                new Promise(resolve => {return "hello"})
            ).pipe(
                map((response:any) => {
                    if (response.data.isResult) {
                        return "";
                    } else {
                        throw response;
                    }
                }),
                catchError((err) => {
                    const result = {
                        isLocked: false,
                        canUnlock: true,
                        message: 'Something went wrong. Please try again later.',
                    };
                    if (err.data?.result?.lockingState == 102) {
                        result.isLocked = true;
                        var endDate = new Date();
                        var startDate = Date.parse(err.data.result.lastLockingTime);
                        var seconds = (endDate.getTime() - startDate) / 1000;
                        var definedLockedPeriod = err.data.result.lockingPeriodDuration * 60;
                        result.canUnlock = seconds > definedLockedPeriod;
                    }
                    if (err?.data?.errorMessages.length > 0) {
                        result.message = err.data.errorMessages[0].messageEN;
                    } else if (err?.data?.infoMessages.length > 0) {
                        result.message = err.data.infoMessages[0].messageEN;
                    }
                    return of("");
                })
            )
        )
    );
};