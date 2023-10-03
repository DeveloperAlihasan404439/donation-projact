import { Helmet } from "react-helmet-async";

const Banner = ({ hendelSearch }) => {
  const background = {
    backgroundImage: "url('https://i.ibb.co/ZTRN6St/banner.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div style={background} className="pt-16 ">
      <Helmet>
        <title>Home / Banner</title>
      </Helmet>
      <div className="w-full h-[70vh] bg-[#c0b8b898]">
        <div className="w-11/12 mx-auto flex items-center h-full">
          <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold text-black pb-5 text-center">
                I Grow By Helping People In Need
              </h1>
              <div className="md:bg-white p-0 m-0 md:w-[30%] md:flex items-center justify-items-center rounded-none md:rounded-lg">
                <input
                  type="text"
                  id="search"
                  placeholder="search text"
                  className="outline-none transform w-full focus:bg-none text-2xl mb-2 text-black px-3 py-2 md:py-0  rounded-lg md:rounded-l-lg"
                />
                <button
                  onClick={hendelSearch}
                  className="bg-[#ff444a] w-full md:w-[40%] px-3 text-2xl py-2 rounded-lg md:rounded-r-lg"
                >
                  Search
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
