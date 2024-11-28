import React, { useEffect, useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';

const Carouselcut = () => {
  const [coins, setCoins] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the user is on a mobile device
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    // Initialize the check and add resize event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Fetching coin data from the CoinGecko API
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR`
        );
        const data = await response.json();
        console.log(data);
        setCoins(data); // Storing the coin data in state
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    fetchCoins(); // Call the function to fetch data when the component mounts
  }, []);

  return (
    <div className="p-2">
      <Carousel
        interval={3000}
        slide={true}
        controls={false}
        indicators={false}
      >
        {coins.length > 0 ? (
          [...Array(Math.ceil(coins.length / (isMobile ? 1 : 5)))].map(
            (_, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center">
                  {coins
                    .slice(index * (isMobile ? 1 : 5), index * (isMobile ? 1 : 5) + (isMobile ? 1 : 5))
                    .map((coin, coinIndex) => (
                      <Card
                        key={coinIndex}
                        className="glass-card mx-2"
                        style={{
                          width: '17rem',
                          height: '10rem',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          color: 'white',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}
                      >
                        <div className="d-flex justify-content-center p-2">
                          <img
                            src={coin.image}
                            alt={coin.name}
                            width="40"
                            height="40"
                          />
                        </div>
                        <Card.Body>
                          <Card.Title>{coin.name}</Card.Title>
                          <Card.Title>
                            Price: ₹{coin.current_price}
                          </Card.Title>
                          <Card.Text>Rank: {coin.market_cap_rank}</Card.Text>
                        </Card.Body>
                      </Card>
                    ))}
                </div>
              </Carousel.Item>
            )
          )
        ) : (
          <Carousel.Item>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: '10rem' }}
            >
              <img
                src="https://cliply.co/wp-content/uploads/2021/02/372102230_BITCOIN_400px.gif"
                width="60"
                height="60"
                alt="coin"
              />
            </div>
          </Carousel.Item>
        )}
      </Carousel>
    </div>
  );
};

export default Carouselcut;
