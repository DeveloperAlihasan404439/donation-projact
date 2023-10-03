import { useContext, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { AuthContext } from "../../../../pages/ContextProvider/ContextProvider";
import { Link, useNavigate, } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [open, setOpen] = useState(true);
  const { loginUser } = useContext(AuthContext);
  const naviget = useNavigate()
  const hendelLoing = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        naviget('/')
        Swal.fire(
            'Success',
            'Success the login',
            'warning'
          )
      })
      .catch((error) => {
        Swal.fire(
            `${error.message}`,
            'Success the login',
            'error'
          )
      });
  };
  return (
    <div className=" bg-base-200">
      <div className="hero w-11/12 mx-auto h-[100vh] pt-20">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          <div className="text-center md:w-[50%] lg:text-left">
            <h1 className="text-5xl font-bold text-center pb-3">Login now!</h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajKZUpkARQplzHOYUdfCm_5NI7XYESSD9FQ&usqp=CAU"
              alt=""
              className="w-full h-[500px]"
            />
          </div>
          <div className="card flex-shrink-0 w-full md:w-[50%] shadow-2xl bg-base-100">
            <form onSubmit={hendelLoing} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className=" relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={open ? "password" : "text"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <div
                  onClick={() => setOpen(!open)}
                  className="absolute top-12 right-2"
                >
                  {open ? (
                    <HiEye className="text-2xl text-red-600"></HiEye>
                  ) : (
                    <HiEyeOff className="text-2xl text-red-600" />
                  )}
                </div>
              </div>
              <div>
                <label className="label">
                  <Link to ='/forgetPassword' className="label-text-alt link link-hover">
                    Forget password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
              <p className="text-lg">
                Welcome to the website please{" "}
                <Link to="/registor" className="hover:underline text-red-700">
                  Registor
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
