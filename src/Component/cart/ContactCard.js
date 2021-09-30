import React from "react";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.imgUrl} />
      <h3>{props.name}</h3>
      <p>Mobile: {props.Price}</p>
      <p>Offer: {props.Offer}</p>
      <nav>
        <button>Buy Now</button>
        <button className="whish">Whislist</button>
      </nav>
    </div>
  );
}

export default ContactCard;
