import React from 'react';

const testimonialsData = [
    {
        id: 1,
        name: 'John Doe',
        feedback: 'This is an amazing service! Highly recommend it to everyone.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Jane Smith',
        feedback: 'Absolutely loved the experience. Will come back for sure!',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Sam Wilson',
        feedback: 'Great customer support and fantastic results!',
        image: 'https://via.placeholder.com/150',
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonials-list">
                {testimonialsData.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-item">
                        <img src={testimonial.image} alt={`${testimonial.name}'s profile`} />
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;