import {routerMiddleware} from 'connected-react-router';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable';
import history from '../router/history';
import {ReactLearningAppRootEpic} from './epics';
import ReactLearningAppRootReducer from './reducers';

const epicMiddleware = createEpicMiddleware({dependencies: {history: history}});

const configureStore = () => {
    const ReactLearningAppStore = createStore(
        ReactLearningAppRootReducer(history),
        composeWithDevTools(applyMiddleware(routerMiddleware(history), epicMiddleware))
    );
    epicMiddleware.run(ReactLearningAppRootEpic);
    return ReactLearningAppStore;
};
export default configureStore;