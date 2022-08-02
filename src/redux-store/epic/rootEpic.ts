import {combineEpics} from "redux-observable";
import {counterIncrementEpic} from "./counterEpic";

export const rootEpic = combineEpics(
    counterIncrementEpic,
);