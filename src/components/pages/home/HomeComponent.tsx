import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllProductActionRequest} from "../../../redux-store/reducer/allProductSlice";

export function HomeComponent() {
    const allProductState = useSelector((state: any) => state.allProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProductActionRequest());
    }, []);

    console.log("products:", allProductState.products);
    return (<>
        HOME
    </>)
}

export default HomeComponent;