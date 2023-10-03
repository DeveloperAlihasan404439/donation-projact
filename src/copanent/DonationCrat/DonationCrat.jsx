import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
const DonationCrat = ({ searchText }) => {
  const [donetions, setDonetion] = useState();
  const [displayDonations, setDisplayDonations] = useState([]);

  useEffect(() => {
    fetch("/donationsData.json")
      .then((res) => res.json())
      .then((data) => {
        setDonetion(data);
        setDisplayDonations(data);
      });
  }, []);

  useEffect(() => {
    if (searchText) {
      const filterSearchText = displayDonations.filter(
        (donation) => donation.category === searchText
      );
      setDonetion(filterSearchText);
    } else {
      setDonetion(displayDonations);
    }
  }, [searchText, displayDonations]);
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
      
      {donetions?.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}
    </div>
  );
};

export default DonationCrat;
