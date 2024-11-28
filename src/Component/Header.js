import React from 'react';
import { Container, Navbar, Form } from 'react-bootstrap';
import "../App.css"

function Header({ onCurrencyChange }) {
  const handleCurrencyChange = (e) => {
    onCurrencyChange(e.target.value);
  };

  return (
    <Navbar className="glass-navbar" style={{backgroundColor:" rgba( 255, 255, 255, 0.2 ) ",color:"white",textAlign:"center" }}expand="lg">
      <Container fluid>
        {/* Navbar Branding */}
        <Navbar.Brand href="#home">
        <h4 className="text-warning fs-5">ManiUKI Crypto Tracker</h4>

        </Navbar.Brand>

        {/* Right-aligned Currency Selector */}
        <Navbar.Collapse className="justify-content-end">
          <Form.Select
            className="w-auto"
            style={{ width: '120px', height: '40px' }}
            aria-label="Select currency"
            onChange={handleCurrencyChange}
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
            <option value="gbp">GBP</option>
            <option value="jpy">JPY</option>
          </Form.Select>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
