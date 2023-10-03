import { useContext, useState } from "react";
import { GrClose } from "react-icons/gr";
import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../pages/ContextProvider/ContextProvider";
const Navber = () => {
  const [open, setOpen] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <div className="fixed w-full z-10  bg-slate-50">
      <nav className="w-11/12 relative  mx-auto py-4 text-black px-3 flex flex-row-reverse justify-between items-center">
        <div onClick={() => setOpen(!open)} className={`md:hidden`}>
          {open ? (
            <GrClose className="text-2xl text-black" />
          ) : (
            <FiAlignJustify className="text-2xl text-black" />
          )}
        </div>
        <div className="block text-30 md:hidden">
          <ul
            className={`w-[35%]  text-right text-white pr-8 duration-1000 absolute flex flex-col ${
              open ? "left-[69.5%] top-[60px]" : "-left-80"
            } top-[100%]  bg-black pl-5 t shadow-xl z-10`}
          >
            {open ? (
              <>
                <NavLink to="/" className="text-sm md:text-xl">
                  Home
                </NavLink>
                {user ? (
                  <>
                    <NavLink to="/donation" className="text-sm md:text-xl">
                      Donation
                    </NavLink>
                    <NavLink to="/statistics" className="text-sm md:text-xl">
                      Statistics
                    </NavLink>
                    <NavLink onClick={logOutUser}>Log Out</NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to="/registor" className="text-sm md:text-xl">
                      Registor
                    </NavLink>
                    <NavLink to="/login" className="text-sm md:text-xl">
                      Login
                    </NavLink>
                  </>
                )}
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
        <ul className="hidden md:flex gap-4 text-2xl text-black">
          <NavLink to="/">Home</NavLink>
          {user ? (
            <>
              <NavLink to="/donation">
                Donation
              </NavLink>
              <NavLink to="/statistics" >
                Statistics
              </NavLink>
              <NavLink onClick={logOutUser}>Log Out</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/registor">Registor</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </ul>
        <img
          src="https://i.ibb.co/7rhfjZx/Logo.png"
          alt=""
          className="h-8 md:h-14"
        />
      </nav>
    </div>
  );
};

export default Navber;
