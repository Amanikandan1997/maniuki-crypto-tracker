import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ImgCard from './ImgCard';
import '../App.css';
import Carouselcut from './Carouselcut';

function Hero({ currency }) {
  const [currencyList, setCurrencyList] = useState([]);
  const [search, setSearch] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('');

  // Mapping of currency codes to symbols
  const currencySymbols = {
    inr: '₹',
    eur: '€',
    usd: '$',
    gbp: '£',
    jpy: '¥',
    // Add more as needed
  };

  useEffect(() => {
    // Update the currency symbol based on the selected currency
    setCurrencySymbol(currencySymbols[currency.toLowerCase()] || currency);
    
    // Fetch cryptocurrency data
    Axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`)
      .then((response) => setCurrencyList(response.data))
      .catch((err) => console.error('API call failed:', err));
  }, [currency]); // Re-run when currency changes

  const handleSearch = (e) => setSearch(e.target.value);

  return (
  <>

       
      
   <div className="banner text-center px-6">
   
  <div>
   
    
    <div className="mt-4  ">
    <h1 className="animate-charcter text-center p-6  " style={{
        backgroundColor: 'rgba( 0, 0, 0, 0)',
        padding:"12px",
    }}>ManiUKI Crypto Tracker</h1>
        <Carouselcut/>
      <form className="d-flex justify-content-center p-6" style={{
        backgroundColor: 'rgba( 0, 0, 0, 0)',
    }}>
        <input 
  type="text" 
  placeholder="Search Cryptocurrency" 
  aria-label="Search"
  onChange={handleSearch}
  style={{
    width: '400px', // Adjust width as needed
    padding: '12px 12px', // Padding for spacing inside the input
    borderRadius: '25px', // Rounded corners
    border: '1px solid #ccc', // Border styling
    fontSize: '14px', // Font size adjustment
    textAlign: 'center', // Center placeholder text
    outline: 'none' // Remove default outline
  }}
/>

        
      </form>

    
    
    </div>
  </div>


  
</div>

      <div className="bottom row justify-content-center">
      
      </div>
      <div className="justify-content-center p-5 d-flex flex-wrap">
        {currencyList
          .filter((currency) =>
            currency.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((currency) => (
            <ImgCard key={currency.id} {...currency} currencySymbol={currencySymbol} />
          ))}
      </div>
      </>
  );
}

export default Hero;
