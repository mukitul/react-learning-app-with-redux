import {combineEpics} from "redux-observable";
import {counterIncrementEpic} from "./counterEpic";
import {allProductRequestEpic} from "./allProductEpic";

export const rootEpic = combineEpics(
    counterIncrementEpic,
    allProductRequestEpic,
);