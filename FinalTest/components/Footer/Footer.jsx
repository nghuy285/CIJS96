import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="helpAll">
        <h1>WE’RE HERE TO HELP</h1>
        <div className="helpContain">
          <div className="guides">
            <img
              src="https://cdn.shopify.com/s/files/1/0636/8837/6542/files/Product_Guides.svg?v=1664445955"
              style={{ width: "48px", height: "48px" }}
            ></img>
            <h5>Product Guides</h5>
          </div>
          <div className="contact">
            <img
              src="https://cdn.shopify.com/s/files/1/0636/8837/6542/files/Contact_Us.svg?v=1664445955"
              style={{ width: "48px", height: "48px" }}
            />
            <h5>Contact Us</h5>
          </div>
        </div>
        <div className="info">
          <div className="appFooter">
            <h2>APPS</h2>
            <p>PDP Control Hub</p>
            <p>Vitricx Control Hub</p>
          </div>
          <div className="shopFooter">
            <h2>SHOP</h2>
            <p>Xbox</p>
            <p>Playstation</p>
            <p>Nintendo Switch</p>
            <p>PC</p>
            <p>Vitrix</p>
          </div>
          <div className="helpFooter">
            <h2>HELP</h2>
            <p>Shipping & Returns</p>
            <p>Warranty</p>
            <p>Support</p>
            <p>Packaging and Recycling Information</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
