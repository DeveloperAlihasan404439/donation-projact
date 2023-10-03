import { Outlet, useNavigation } from "react-router-dom";
import Navber from "../../copanent/Header/Navber/Navber";
import Loding from "../Loding/Loding";

const MainLayOut = () => {
    const navigation = useNavigation();
    return (
        <div className={`w-full  ${navigation.state === "loading"?'bg-[#150F2D]':"bg-white"}`}>
            <Navber/>
            <div>
            {
                navigation.state === "loading"?<Loding></Loding>:<Outlet></Outlet>
            }
            
        </div>
        </div>
    );
};

export default MainLayOut;