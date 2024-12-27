import React from 'react';
import './features.css';

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-item">
        <img src="/icons/free-shipping.png" alt="Free Shipping" className="feature-icon" />
        <h3>Free Shipping</h3>
        <p>Enjoy free shipping on all your orders with no extra costs.</p>
      </div>
      <div className="feature-item">
        <img src="/icons/guarantee.png" alt="100% Guarantee" className="feature-icon" />
        <h3>100% Guarantee</h3>
        <p>We provide a 100% satisfaction guarantee on all our products.</p>
      </div>
      <div className="feature-item">
        <img src="/icons/support.png" alt="24/7 Support" className="feature-icon" />
        <h3>24/7 Support</h3>
        <p>Our support team is available 24/7 to assist you.</p>
      </div>
      <div className="feature-item">
        <img src="/icons/daily-offers.png" alt="Daily Offers" className="feature-icon" />
        <h3>Daily Offers</h3>
        <p>Check out amazing daily deals and discounts.</p>
      </div>
      <div className="feature-item">
        <img src="/icons/fast-delivery.png" alt="Super Fast Delivery" className="feature-icon" />
        <h3>Super Fast Delivery</h3>
        <p>Get your orders delivered in no time with our express service.</p>
      </div>
      <div className="feature-item">
        <img src="/icons/minimum-order.png" alt="Minimum Order" className="feature-icon" />
        <h3>Minimum Order</h3>
        <p>Place orders with a minimum value to enjoy exclusive perks.</p>
      </div>
      <div className="feature-item">
        <img src="/icons/best-quality.png" alt="Best Brand - Best Quality" className="feature-icon" />
        <h3>Best Brand - Best Quality</h3>
        <p>Shop only from the best brands that ensure top-notch quality.</p>
      </div>
      <div className="feature-item">
        <img src="/icons/helpline.png" alt="Order & Helpline" className="feature-icon" />
        <h3>Order & Helpline</h3>
        <p>Need help? Call our order and helpline for quick assistance.</p>
      </div>
    </div>
  );
};

export default Features;
