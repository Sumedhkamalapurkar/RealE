// TestimonialSlider.js
import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    text: "This is an amazing product! I can't believe how much it has helped me.",
    author: "John Doe",
  },
  {
    text: "Great customer service and quick response to my inquiries. Highly recommended!",
    author: "Jane Smith",
  },
  // Add more testimonials as needed
];

const Sliding = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="testimonial-slider">
      {testimonialsData.map((testimonial, i) => (
        <div
          key={i}
          className={`testimonial ${i === index ? 'active' : ''}`}
        >
          <p className="text-lg font-semibold">{testimonial.text}</p>
          <p className="text-sm italic mt-2">- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Sliding;
