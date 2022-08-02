import {useDispatch, useSelector} from 'react-redux'
import {
    decrementActionRequest,
    incrementActionRequest,
    incrementByAmountActionRequest
} from '../redux-store/reducer/counterSlice'

export function CounterComponent() {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(incrementActionRequest())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrementActionRequest())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Increment By 3 value"
                    onClick={() => dispatch(incrementByAmountActionRequest(3))}
                >
                    Increment By 3
                </button>
            </div>
        </div>
    )
}

export default CounterComponent;