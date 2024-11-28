import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import '../App';

function ImgCard(props) {
  const [showModal, setShowModal] = useState(false);
  const currentYear = new Date().getFullYear();
  // Toggle modal visibility
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="p-2">
      <Card
        className="glass-card card-hover"
        style={{
          width: '18rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          textAlign: 'center',
          cursor: 'pointer',
        }}
        onClick={handleShow}
      >
        <div className="d-flex justify-content-center p-2">
          <img src={props.image} alt={props.name} width="80" height="80" />
        </div>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Title>
            Price: {props.currencySymbol} {props.current_price}
           
          </Card.Title>
         
          <Card.Text>Rank: {props.market_cap_rank}</Card.Text>
          <Card.Text>Market Cap:  {props.currencySymbol} {props.market_cap.toLocaleString()}M</Card.Text>
          <p>Last Update: {props.last_updated
          }</p>
        </Card.Body>
        
      </Card>

      {/* Modal to show full card details */}
      <Modal show={showModal} onHide={handleClose} centered  className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center mb-2" >
            <img src={props.image} alt={props.name} width="120" height="120" />
          </div>
          <p><strong>Name:</strong> {props.name}</p>
          <p><strong>Price:</strong> {props.currencySymbol} {props.current_price}</p>
          <p><strong>Rank:</strong> {props.market_cap_rank}</p>
          <p><strong>Market Cap:</strong> {props.currencySymbol} {props.market_cap.toLocaleString()}M</p>
          <p><strong>24hour Price Range:</strong> {props.price_change_24h}</p>
          <p><strong>24hour Price Range %:</strong> {props.price_change_percentage_24h
          }</p>
          <p><strong>Last Update:</strong> {props.last_updated
          }</p>
         
        </Modal.Body>
      
      </Modal>
    
    </div>
  );
}

export default ImgCard;
