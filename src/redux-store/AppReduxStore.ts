import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./reducer/rootReducer";
import {createEpicMiddleware} from "redux-observable";
import {rootEpic} from "./epic/rootEpic";

const epicMiddleware = createEpicMiddleware();
const AppReduxStore = configureStore({
    reducer: rootReducer(),
    middleware: [epicMiddleware]
});
epicMiddleware.run(rootEpic);

export default AppReduxStore;