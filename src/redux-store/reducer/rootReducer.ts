import counterSlice from "./counterSlice";
import allProductSlice from "./allProductSlice";

const rootReducer = () => {
    return {
        counter: counterSlice,
        allProduct: allProductSlice,
    }
}

export default rootReducer;