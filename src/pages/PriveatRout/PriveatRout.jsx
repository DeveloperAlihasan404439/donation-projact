import { useContext } from "react";
import { AuthContext } from "../ContextProvider/ContextProvider";
import { Navigate } from "react-router-dom";


const PriveatRout = ({children}) => {
    const {user,loding} = useContext(AuthContext)
    if(loding){
        return <span className="pt-40">Ligjksadhgjkdfgdf</span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PriveatRout;