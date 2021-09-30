import React from "react";
import ContactCard from "./ContactCard";
import "./card.css";

function Card() {
  return (
    <div className="contacts">
      <ContactCard
        name="Galaxy F62"
        imgUrl="https://images.samsung.com/is/image/samsung/in-galaxy-z-fold2-f916-sm-f916bznainu-frontmysticbronze-thumb-296456509?$160_160_PNG$"
        Price="₹27999.00"
        Offer="Discount 10% on HDFC"
      />

      <ContactCard
        name="Galaxy Z"
        imgUrl="https://images.samsung.com/is/image/samsung/in-galaxy-z-fold2-f916-sm-f916bznainu-frontmysticbronze-thumb-296456509?$160_160_PNG$"
        Price="₹38999.00"
        Offer="Discount 10% on HDFC"
      />

      <ContactCard
        name="Galaxy Note"
        imgUrl="https://www.reliancedigital.in/medias/iPhone-11-128GB-Black-491901644-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTEzOTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2g1NS85NDIxOTE4NDcwMTc0LmpwZ3w1OGQ0YWJiYzI2ZjljZjA4Nzg5ZGIwYzA3MWRiMmIyMDA2MjQ1NDhjYTM1MTI3YWQ2ODY3YThhNDBiMzM1Nzk2"
        Price="₹47999.00"
        Offer="Discount 10% on HDFC"
      />

      <ContactCard
        name="Galaxy S-21"
        imgUrl="https://images.samsung.com/is/image/samsung/in-galaxy-z-fold2-f916-sm-f916bznainu-frontmysticbronze-thumb-296456509?$160_160_PNG$"
        Price="₹49000.00"
        Offer="Discount 10% on HDFC"
      />
      <ContactCard
        name="Galaxy A"
        imgUrl="https://images.samsung.com/is/image/samsung/in-galaxy-z-fold2-f916-sm-f916bznainu-frontmysticbronze-thumb-296456509?$160_160_PNG$"
        Price="₹60000.00"
        Offer="Discount 10% on HDFC"
      />

      <ContactCard
        name="Galaxy F"
        imgUrl="https://images.samsung.com/is/image/samsung/p6pim/in/sm-g991bzadinu/gallery/in-galaxy-s21-5g-g991-371114-sm-g991bzadinu-thumb-410189272?$160_160_PNG$"
        Price="₹90000.00"
        Offer="Discount 10% on HDFC"
      />

      <ContactCard
        name="Galaxy  R"
        imgUrl="https://images.samsung.com/is/image/samsung/p6pim/in/sm-g991bzadinu/gallery/in-galaxy-s21-5g-g991-371114-sm-g991bzadinu-thumb-410189272?$160_160_PNG$"
        Price="₹29000.00"
        Offer="Discount 10% on HDFC"
      />

      <ContactCard
        name="Galaxy Flod"
        imgUrl="https://images.samsung.com/is/image/samsung/p6pim/in/sm-g781bzggins/gallery/in-galaxy-s20-fe-5g-g781-sm-g781bzggins-thumb-405304989?$160_160_PNG$"
        Price="₹25000.00"
        Offer="Discount 10% on HDFC"
      />
    </div>
  );
}

export default Card;
