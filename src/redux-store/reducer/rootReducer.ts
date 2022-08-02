import counterSlice from "./counterSlice";

const rootReducer = () => {
    return {
        counter: counterSlice
    }
}

export default rootReducer;