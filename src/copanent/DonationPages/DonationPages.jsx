import { Link } from "react-router-dom";

const DonationPages = ({donation}) => {
    const {id, picture, price, title, card_bg, button_color, text_color, category } =
    donation;
  return (
    <div className="rounded-lg">
      <div
        className="md:flex shadow-xl gap-2 "
        style={{ backgroundColor: card_bg }}
      >
        <img src={picture} alt="Movie" className="rounded-l-lg w-full md:w-[50%] h-[200px]" />
        <div className="p-4">
          <button
            className="py-2 px-6 text-xl rounded-lg "
            style={{ backgroundColor: button_color, color: text_color }}
          >
            {category}{" "}
          </button>
          <h2 className="card-title" style={{ color: text_color }}>
            {title}
          </h2>
          <p className="text-lg py-2" style={{ color: text_color }}>
            {" "}
            ${price}
          </p>
          <Link to={`/dateils/${id}`}><button
            className="px-5 py-2 rounded-lg shadow-md text-white "
            style={{ backgroundColor: text_color }}
          >
            View Detail
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default DonationPages;