import React from 'react';
import './testimonials.css';


function Testimonial({ name, role, image, text, rating }) {
  return (
    <div className="testimonial">
      <img src={image} alt={`${name}'s portrait`} />
      <h3>{name}</h3>
      <h4>{role}</h4>
      <p>{text}</p>
      <p>Rating: {"⭐".repeat(rating)}</p>
    </div>
  );
}

export default Testimonial;
