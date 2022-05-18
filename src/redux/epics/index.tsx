import {loginRequestEpic} from "./AuthEpic";
import {combineEpics} from "redux-observable";

export const ReactLearningAppRootEpic = combineEpics(
    //auth epics
    loginRequestEpic
);