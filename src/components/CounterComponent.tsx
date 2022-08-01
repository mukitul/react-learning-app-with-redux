import { useSelector, useDispatch } from 'react-redux'
import { incrementAction, decrementAction, incrementByAmountAction } from '../redux-store/reducer/counterReducer'

export function CounterComponent() {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(incrementAction())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrementAction())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Increment By 3 value"
                    onClick={() => dispatch(incrementByAmountAction(3))}
                >
                    Increment By 3
                </button>
            </div>
        </div>
    )
}

export default CounterComponent;