import counterReducer from "./counterReducer";

const rootReducer = () => {
    return {
        counter: counterReducer
    }
}

export default rootReducer;