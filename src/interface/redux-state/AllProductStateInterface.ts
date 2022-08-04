import {ProductInfoInterface} from "../ProductInfoInterface";
import {CommonStateInterface} from "./CommonStateInterface";

export interface AllProductStateInterface extends CommonStateInterface {
    products: Array<ProductInfoInterface>,
}