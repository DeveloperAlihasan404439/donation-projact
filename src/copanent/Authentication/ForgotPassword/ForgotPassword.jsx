import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../pages/ContextProvider/ContextProvider";
import Swal from "sweetalert2";

const ForgotPassword = () => {
    const {forgotPassword} = useContext(AuthContext)
    const hendelForgotPassword = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        forgotPassword(email)
        .then(() => {
            Swal.fire(
                'Forget Password',
                'Chack your email',
                'question'
              );
        })
        .catch(error =>{
            console.log(error.message);
        })

    }
  return (
    <div className=" bg-base-300">
      <div className="hero w-11/12 mx-auto h-[100vh] pt-20">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full md:w-[50%] shadow-2xl bg-base-100">
            <form onSubmit={hendelForgotPassword} className="card-body">
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
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Forgot password"
                />
              </div>
              <p className="text-lg">
                Do you remember the password? please {' '}
                <Link to="/login" className="hover:underline text-red-700">
                 Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
