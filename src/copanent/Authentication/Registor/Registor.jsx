import Swal from "sweetalert2";
import { HiEye,HiEyeOff } from 'react-icons/hi';
import { useContext, useState } from "react";
import { AuthContext } from '../../../pages/ContextProvider/ContextProvider';
import { Link } from "react-router-dom";
import { getAuth, sendEmailVerification } from 'firebase/auth';
import app from '../../../pages/Firebase/Firebase';
const Registor = () => {
    const [open, setOpen] = useState(true)
    const [confrom, setConfrom] = useState(true)
    const auth = getAuth(app)
    const {createUser} = useContext(AuthContext)
    const hendelRegistor = event =>{
        event.preventDefault()
        const target = event.target;
        const name = target.name.value;
        const email = target.email.value;
        const photo = target.photo.value;
        const password = target.password.value;
        const confrom = target.confrom.value;
        // password validation 
       /*  if(password.length <6){
            return Swal.fire(
                'Password Length',
                'Your password must be 6 characters',
                'error'
              )
        }
        else if(!/[A-Z]/.test(password)){
            return Swal.fire(
                'Password uppercase',
                'Include at one uppercase letter in your password.',
                'error'
              )
        }
        else if(!(password === confrom)){
            return Swal.fire(
                'Password match',
                'Passwords do not match. Please try again',
                'error'
              )
        }
        else{
            console.log(name, email, photo, password, confrom);
            return Swal.fire(
                'Success the password',
                'success'
                )
            } */
        createUser(email, password)
        .then(result =>{
            const userInfo = result.user;
            sendEmailVerification(auth.currentUser)
            Swal.fire(
                'Chack your email',
                'question'
              )
            console.log(userInfo);
        })
        .catch(error =>{
            const message = error.message;
            Swal.fire(
                `${message}`,
                'Alredi have an account please new email',
                'warning'
              )
        })
        console.log(name, email, photo, password, confrom);
    }
  return (
    <div className=" bg-base-200">
      <div className="hero w-11/12 mx-auto h-[100vh] pt-20">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          <div className="text-center md:w-[50%] lg:text-left">
            <h1 className="text-5xl font-bold text-center pb-3">Registor now!</h1>
            <img
              src="https://img.lovepik.com/element/45009/2311.png_300.png"
              alt=""
              className="w-full h-[500px]"
            />
          </div>
          <div className="card flex-shrink-0 w-full md:w-[50%] shadow-2xl bg-base-100">
            <form onSubmit={hendelRegistor} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className=" md:flex justify-between gap-4">
                <div className="w-full md:w-1/2 relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={open? 'password':'text'}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <div onClick={()=> setOpen(!open)} className="absolute top-12 right-2">
                        {
                            open?<HiEye className="text-2xl text-red-600"></HiEye>
                            : <HiEyeOff className="text-2xl text-red-600"/>
                        }
                  </div>
                  
                </div>
                <div className="w-full md:w-1/2 relative">
                  <label className="label">
                    <span className="label-text">Confrom Password</span>
                  </label>
                  <input
                    type={confrom? 'password':'text'}
                    name="confrom"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <div onClick={()=> setConfrom(!confrom)} className="absolute top-12 right-2">
                        {
                            confrom?<HiEye className="text-2xl text-red-600"></HiEye>
                            : <HiEyeOff className="text-2xl text-red-600"/>
                        }
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Registor" />
              </div>
              <p className="text-lg">Alredi have an account please <Link to="/login" className="hover:underline text-red-700">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registor;
