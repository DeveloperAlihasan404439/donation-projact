import { useEffect, useState } from "react";
import { useDonationFetch } from "../../utitlites/donationFetch";
import DonationPages from "../../copanent/DonationPages/DonationPages";
import { getDonations } from "../../utitlites/utitlites";
import { Helmet } from "react-helmet-async";
const Donation = () => {
  const donationData = useDonationFetch("/donationsData.json");
  const [donations, setDonations] = useState([]);
  const [seeAll, setSeeAll] = useState(3);
  useEffect(() => {
    const localStroges = getDonations();
    
    if (donationData.length > 0) {
      const exites = [];
      for (const id of localStroges) {
        const makeDonetion = donationData?.find(
          (mokeData) => mokeData.id === id
        );
        exites.push(makeDonetion);
      }
      setDonations(exites);
    }
    
  }, [donationData]);
  return (
    <div className="w-11/12 mx-auto 4 pt-28 h-[100vh]">
      <Helmet>
        <title>Donation </title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {donations.length === seeAll
          ? donations?.map((donation) => (
              <DonationPages key={donation.id} donation={donation} />
            ))
          : donations
              ?.slice(0, 4)
              .map((donation) => (
                <DonationPages key={donation.id} donation={donation} />
              ))
        }
      </div>
      <div className={`${donations.length >= 5 ? "block" : "hidden"}`}>
        <div
          className={`text-center py-4 ${
            donations.length === seeAll ? "hidden" : "block"
          }`}
        >
          <button
            onClick={() => setSeeAll(donations.length)}
            className="bg-[#009444] px-4 py-2 rounded-lg text-white text-2xl font-medium"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;

/* if (nodata.length > 0) {
      const exites = [];
      for (const id of localStroges) {
        const makeDonetion = donationData?.find(
          (mokeData) => mokeData.id === id
        );
        exites.push(makeDonetion);
      }
      setDonations(exites);
    }
    else{
      setNodata(['No data in Local Stroz, please input the data'])
    } */

    // setNodata(exites);
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {donations.length === seeAll
          ? donations?.map((donation) => (
              <DonationPages key={donation.id} donation={donation} />
            ))
          : donations
              ?.slice(0, 4)
              .map((donation) => (
                <DonationPages key={donation.id} donation={donation} />
              ))
        }
      </div> */}