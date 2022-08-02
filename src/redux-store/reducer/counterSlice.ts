import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

export interface CounterState {
    value: number
    isSuccessful: boolean
}

const initialState: CounterState = {
    value: 0,
    isSuccessful: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementActionRequest: (state: any) => {

        },
        incrementAction: (state: any) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
            state.isSuccessful = true
        },
        incrementActionFailed: (state: any) => {
        },
        decrementActionRequest: (state: any) => {

        },
        decrementAction: (state: any) => {
            state.value -= 1
            state.isSuccessful = true
        },
        incrementByAmountActionRequest(state: any, action: PayloadAction<number>) {

        },
        incrementByAmountAction(state: any, action: PayloadAction<number>) {
            state.value += action.payload
            state.isSuccessful = true
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    incrementActionRequest,
    incrementAction,
    incrementActionFailed,
    decrementActionRequest,
    decrementAction,
    incrementByAmountActionRequest,
    incrementByAmountAction
} = counterSlice.actions

export default counterSlice.reducer