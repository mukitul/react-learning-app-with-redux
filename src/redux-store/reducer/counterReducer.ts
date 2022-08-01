import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementAction: (state: any) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrementAction: (state: any) => {
            state.value -= 1
        },
        incrementByAmountAction(state: any, action: PayloadAction<number>) {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { incrementAction, decrementAction, incrementByAmountAction } = counterSlice.actions

export default counterSlice.reducer