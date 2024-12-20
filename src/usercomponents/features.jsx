import React from "react";
import "./features.css";

const Features = () => {
  const features = [
    { icon: "🚚", title: "Free Shipping", description: "On all orders over $50" },
    { icon: "✅", title: "100% Guarantee", description: "Satisfaction guaranteed or your money back" },
    { icon: "📞", title: "24/7 Support", description: "We're here to help anytime" },
    { icon: "🔥", title: "Daily Offers", description: "Exciting deals every day" },
    { icon: "⚡", title: "Super Fast Delivery", description: "Get your orders delivered in record time" },
    { icon: "📦", title: "Minimum Order", description: "No minimum order limits - shop freely" },
    { icon: "🏆", title: "Best Brand - Best Quality", description: "Top brands with premium quality products" },
    { icon: "☎️", title: "Order & Helpline", description: "Contact us for order support anytime" },
  ];

  return (
    <div className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
