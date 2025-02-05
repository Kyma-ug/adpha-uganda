import React, { useState, useEffect, useRef } from 'react';
import './Carousels.css';



const Carousels = ({ partners }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const isMobile = window.innerWidth <= 768; // Check if the screen is mobile
    const itemsPerPage = isMobile ? 3 : 6; // Show 3 items on mobile, 6 on desktop

    // Duplicate partners array to create infinite scroll effect
    const duplicatedPartners = [...partners, ...partners];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(intervalId); // Clear interval on unmount
    }, [partners.length]);

    useEffect(() => {
        if (carouselRef.current) {
            const itemWidth = carouselRef.current.offsetWidth / itemsPerPage;
            carouselRef.current.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth',
            });

            // Reset to the start of the duplicated array when reaching the end
            if (currentIndex === partners.length) {
                setTimeout(() => {
                    carouselRef.current.scrollTo({
                        left: 0,
                        behavior: 'auto', // No smooth transition for reset
                    });
                    setCurrentIndex(0);
                }, 500); // Wait for the smooth scroll to finish
            }
        }
    }, [currentIndex, partners.length, itemsPerPage]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-container">
            <div className="carousel" ref={carouselRef}>
                {duplicatedPartners.map((partner, index) => (
                    <a
                        key={`${partner.id}-${index}`} // Unique key for duplicated items
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="carousel-item"
                        style={{ minWidth: `calc(100% / ${itemsPerPage})` }} // Responsive width
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