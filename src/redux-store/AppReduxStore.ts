import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./reducer/rootReducer";

const AppReduxStore = configureStore({
    reducer: rootReducer(),
});

export default AppReduxStore;