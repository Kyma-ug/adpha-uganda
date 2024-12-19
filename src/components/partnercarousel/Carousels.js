import React, { useState, useEffect, useRef } from 'react';
import './Carousels.css'; 

const Carousels = ({ partners }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(intervalId); // Clear interval on unmount
    }, [partners.length]);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: currentIndex * carouselRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    }, [currentIndex]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-container">
            <div className="carousel" ref={carouselRef}>
                {partners.map((partner, index) => (
                    <a
                        key={partner.id}
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="carousel-item"
                        style={{ minWidth: '170px' }} // Ensure a minimum width for each item
                    >
                        <img src={partner.logo} alt={partner.name} />
                    </a>
                ))}
            </div>
            <div className="carousel-dots">
                {partners.map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousels;