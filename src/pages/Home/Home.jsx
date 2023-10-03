import { useState } from "react";
import Banner from "../../copanent/Header/Banner/Banner";
import DonationCrat from "../../copanent/DonationCrat/DonationCrat";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const [searchText, setSearchText] = useState('');
  const hendelSearch = () => {
    const search = document.getElementById("search");
    const searchValue = search.value;
    setSearchText(searchValue)
    search.value = ''
  };
    return (
        <div>
          <Helmet>
            <title>Home</title>
            </Helmet>
            <Banner hendelSearch={hendelSearch}/>
            <div>
                <DonationCrat searchText ={searchText}/>
            </div>
        </div>
    );
};

export default Home;