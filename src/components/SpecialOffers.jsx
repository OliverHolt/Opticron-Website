import { getSpecialOffers } from "../api";
import { useEffect, useState } from "react";
import "../CSS/specialOffers.css";

const SpecialOffers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSpecialOffers().then((offers) => {
      setOffers(offers);
      setLoading(false);
    });
  }, []);

  return (
    <div className="special-offers">
      <h1 style={{ textAlign: "center", padding: "10px" }}>Special Offers</h1>
      <ul className="offers">
        {offers.map((offer) => {
          return (
            <div key={offer.offer_id} className="offer-card">
              <img
                src={offer.image_url}
                alt="offer picture"
                style={{ width: "200px", height: "200px" }}
              />
              <div>
                <h2>{offer.title}</h2>
                <p>{offer.description}</p>
              </div>
            </div>
          );
        })}
      </ul>
      <button type="submit" className="button">
        View all offers
      </button>
    </div>
  );
};

export default SpecialOffers;
