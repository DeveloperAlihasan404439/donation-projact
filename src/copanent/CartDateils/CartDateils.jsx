import Swal from "sweetalert2";
import { useDonationFetch } from "../../utitlites/donationFetch";
import { setDonations } from "../../utitlites/utitlites";
import { useParams } from "react-router-dom";

const CartDateils = () => {
    const cartDateils = useDonationFetch('/donationsData.json')
    const { id } = useParams();
    const details = cartDateils?.find(
      (donation) => donation.id === parseInt(id)
    );
    const { picture, description, price, text_color,title } = details || {};
      const heandelDonation = () =>{
          setDonations(parseInt(id))
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Donation added successfully',
              showConfirmButton: false,
              timer: 1500
            })
      }
    return (
      <div className="pt-24 w-11/12 mx-auto">
        <div className="relative">
          <img src={picture} alt="" className="w-full rounded-lg h-[60vh]" />
          <div className="absolute bottom-0 bg-[#0b0b0b5d] py-6 w-full rounded-b-lg">
          <button onClick={heandelDonation}
            className="px-5 py-2 rounded-lg text-xl text-white ml-4"
            style={{ backgroundColor: text_color }}
          >
            Prices : ${price}
          </button>
          </div>
        </div>
        <h1 className="text-2xl font-medium text-black pt-6 pb-3">{title}</h1>
        <p className="text-sm md:text-lg font-medium text-black">{description}</p>
      </div>
    );
};

export default CartDateils;