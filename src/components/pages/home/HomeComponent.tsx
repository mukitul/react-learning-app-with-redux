import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllProductRequestAction} from "../../../redux-store/reducer/allProductSlice";
import {ProductInfoInterface} from "../../../interface/ProductInfoInterface";

export function HomeComponent() {
    const allProductState = useSelector((state: any) => state.allProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProductRequestAction());
    }, []);

    return (<>
        <div className="grid grid-cols-3 gap-3 p-2">
            {allProductState.products.map((item: ProductInfoInterface, index: number) => {
                return <div className="flex flex-col justify-center items-center hover:cursor-pointer border shadow"
                            key={index}>
                    <img className="h-65 w-60" alt="" src={item.image}/>
                    <span>{`PRICE: ${item.price}`}</span>
                    <span>{item.title}</span>
                </div>
            })}
        </div>
    </>)
}

export default HomeComponent;