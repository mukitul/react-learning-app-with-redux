import {ErrorInterface} from "../ErrorInterface";

export interface CommonStateInterface {
    isLoading: boolean
    isSuccessful: boolean
    error: ErrorInterface
}