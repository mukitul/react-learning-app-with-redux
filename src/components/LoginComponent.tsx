import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/actions/AuthAction";

const LoginComponent = () =>{

    const dispatch = useDispatch();

    function handleClick(){
        dispatch(loginSuccess());
    }
    return(<>
        <button onClick={()=>handleClick()}>LOGIN</button>
    </>);
}

export default LoginComponent;