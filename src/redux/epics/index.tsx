import {loginRequestEpic, loginSuccessEpic} from "./AuthEpic";
import {combineEpics} from "redux-observable";

export const ReactLearningAppRootEpic = combineEpics(
    //auth epics
    loginRequestEpic,
    loginSuccessEpic
);