import authReducer from "./AuthReducer";
import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

const ReactLearningAppRootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        auth: authReducer,
    });

export default ReactLearningAppRootReducer;