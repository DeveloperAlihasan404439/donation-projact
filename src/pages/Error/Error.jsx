import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="p-0 m-0 h-[100vh] bg-white">
      <div className="max-w-screen-xl mx-auto px-2 md:px-16 lg:px-24">
      <div className="flex flex-col justify-center items-center my-10">
        <h3 className="text-3xl font-bold text-[#061BC4]">Go Back To Home</h3>

        <div className="text-2xl font-bold text-[#061BC4] mt-2">
          {error.statusText || error.message}
        </div>

        <div className="text-2xl font-bold ">
          {error.status === 404 && (
            <div>
            <img
              src="https://www.cloudways.com/blog/wp-content/uploads/wordpress-404-error.jpg"
              alt=""
              className="rounded-lg "
            />
            <div className="flex flex-col justify-center items-center mt-4">
              <Link to="/">
                <button className=" px-6 py-2 font-medium text-xl bg-gradient-to-r from-indigo-500 via-[#1027E5] to-[#061BC4]  rounded-lg text-white">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Error;