import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

export interface AllProductState {
    products: [],
    isLoading: boolean
    isSuccessful: boolean
    result: {}
}

const initialState: AllProductState = {
    products: [],
    isLoading: false,
    isSuccessful: false,
    result: {}
}

export const allProductSlice = createSlice({
    name: 'allProduct',
    initialState,
    reducers: {
        getAllProductActionRequest: (state: any) => {
            state.isLoading = true;
        },
        getAllProductActionSuccess: (state: any, action: PayloadAction<[]>) => {
            state.products = action.payload
            state.isLoading = false;
            state.isSuccessful = true
        },
        getAllProductActionFailed: (state: any, action: PayloadAction<{}>) => {
            state.isSuccessful = false
            state.result = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    getAllProductActionRequest,
    getAllProductActionSuccess,
    getAllProductActionFailed
} = allProductSlice.actions

export default allProductSlice.reducer