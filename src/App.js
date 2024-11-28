
import './App.css';

import Header from './Component/Header';
import Hero from './Component/Hero'
import { useState } from 'react';


function App() {
  const [currency, setCurrency] = useState('usd');
  const currentYear = new Date().getFullYear();
  return (
    <div className="bottom">
     <Header onCurrencyChange={setCurrency} />

     <Hero currency={currency} />
     <p className='animate-charcter'>© 2024-{currentYear} Manikandan UKI Developed. All Rights Reserved.</p>
    </div>
  );
}

export default App;
