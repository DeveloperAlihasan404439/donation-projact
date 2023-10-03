
import { Link } from "react-router-dom";

const Cart = ({cart}) => {
    const { id, picture, category, title, card_bg, button_color, text_color } =
    cart;
  return (
    <Link to={`/dateils/${id}`}  className="shadow-xl rounded-xl" style={{ backgroundColor: card_bg }}>
      <figure>
        <img src={picture} alt="" className="w-full"/>
      </figure>
      <div className="ml-3 mt-3">
        <button
          className="py-2 px-6 text-xl rounded-lg mb-3 "
          style={{ backgroundColor: button_color, color: text_color }}
        >
          {category}{" "}
        </button>
        <p className="text-xl pb-3 font-medium" style={{color: text_color}}>{title}</p>
      </div>
    </Link>
  )
};

export default Cart;