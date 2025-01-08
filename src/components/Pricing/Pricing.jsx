import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="price" className="pricing-container">
      {/* Header Section */}
      <div className="pricing-header">
        <div className="header-left">
        <div className="subtitle">
        <div className="red-lines start">
            <div className="upper-line"></div>
            <div className="lower-line"></div>
          </div>
          OUR PRICE PLAN
          <div className="red-lines end">
            <div className="upper-line"></div>
            <div className="lower-line"></div>
          </div>
        </div>
          <h1 className="header-title">Mechanic Services Cost</h1>
        </div>
        <button className="header-button">SEE ALL PLANS</button>
      </div>

      {/* Main Content */}
      <div className="pricing-content">
        {/* Left Portion */}
        <div className="services-section">
          {[
            {
              img: "/images/pricing/price_1_1.jpg",
              title: "Body Servicing",
              price: "$599.99",
              subservices: [
                "Rims & Tire Change",
                "Rims & Tire Change",
                "Rims & Tire Change",
                "Rims & Tire Change",
              ],
            },
            {
              img: "/images/pricing/price_1_2.jpg",
              title: "Engine Management",
              price: "$399.99",
              subservices: [
                "Rims & Tire Change",
                "Rims & Tire Change",
                "Rims & Tire Change",
                "Rims & Tire Change",
              ],
            },
            {
              img: "/images/pricing/price_1_3.jpg",
              title: "Wheel Servicing",
              price: "$299.99",
              subservices: [
                "Rims & Tire Change",
                "Rims & Tire Change",
                "Rims & Tire Change",
                "Rims & Tire Change",
              ],
            },
          ].map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={service.img}
                alt={service.title}
                className="service-image"
              />
              <div className="service-content">
                <div className="service-title-price">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-price">{service.price}</p>
                </div>
                <ul className="service-subservices">
                  {service.subservices.map((subservice, idx) => (
                    <div className="serv-check"><i class="fa-regular fa-circle-check"></i><li key={idx}>{subservice}</li></div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Right Portion */}
        <div className="premium-package">
          <div className="premium-top">
            <div className="premium-title-desc">
              <h3 className="premium-title">Premium Package</h3>
              <p className="premium-description">
                Pricing plan for startup company
              </p>
            </div>
            <div className="premium-price-truck">
            <p className="premium-price">
              $599.00 <span>/Yearly</span>
            </p>
            <div className="premium-truck"><i class="fa-solid fa-truck-pickup"></i></div>
            </div>
          </div>
          <div className="premium-bottom">
            <ul className="premium-features">
              <li><i class="fa-solid fa-circle-check"></i><div className="li">Rims & Tire Change</div></li>
              <li><i class="fa-solid fa-circle-check"></i><div className="li">Interior Cleaning</div></li>
              <li><i class="fa-solid fa-circle-check"></i><div className="li">Wipe all Surfaces</div></li>
              <li><i class="fa-solid fa-circle-check"></i><div className="li">Leather Clean & Dry</div></li>
              <li><i class="fa-solid fa-circle-check"></i><div className="li">Light Carpet Clean</div></li>
            </ul>
            <button className="purchase-button">PURCHASE NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
