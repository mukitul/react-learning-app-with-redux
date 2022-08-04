import {combineEpics} from "redux-observable";
import {allProductRequestEpic} from "./allProductEpic";

export const rootEpic = combineEpics(
    allProductRequestEpic,
);