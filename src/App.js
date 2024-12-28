import React from 'react';
import Marqueue from './usercomponents/marqueue';
import Features from './usercomponents/features';
import Testimonial from './usercomponents/testimonials';
import Slider from 'react-slick'; // Importing the Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Safetytips from './usercomponents/safetytips';
import ProductDetail from './admin/productdetail';
import ContactPage from './usercomponents/contactpage';
import SortBy from './userpages/sortby';

function App() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Customer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KLsKw0jLKi6EOWlMs2QnOvqlopxW-8i54w&s",
      rating: 5,
      text: "Hi, I would like to thank for receiving my ordered goods in good condition and with high quality.",
    },
    {
      name: "Jane Smith",
      role: "Customer",
      image: "https://via.placeholder.com/64",
      rating: 4,
      text: "Excellent Service For Off Season. Pakka Water Proof Packing and On Time Delivery. Wish you a Happy Diwali Team.",
    },
    {
      name: "Michael Lee",
      role: "Customer",
      image: "https://via.placeholder.com/64",
      rating: 5,
      text: "I got extra discounts and happy to shop many products. Best website for crackers shopping site.",
    },
    {
      name: "Emily Davis",
      role: "Customer",
      image: "https://via.placeholder.com/64",
      rating: 5,
      text: "The crackers were a HUGE success at our wedding! Thought you might enjoy some of these photographs of the action.",
    },
    {
      name: "Chris Johnson",
      role: "Customer",
      image: "https://via.placeholder.com/64",
      rating: 4,
      text: "Very easy to shop. Crackers are really good quality what we look in site. Packing and shipping was good. Timely deliverable. I prefer this site for online cracker purchases.",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <Marqueue />
      <Features />

      {/* Testimonials Section */}
      <h1>---- Testimonials  ----</h1>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            image={testimonial.image}
            text={testimonial.text}
            rating={testimonial.rating}
          />
        ))}
      </Slider>
      <Safetytips/>
      <ProductDetail/>
    <ContactPage/>
    <SortBy/>
    </div>
  );
}

export default App;
