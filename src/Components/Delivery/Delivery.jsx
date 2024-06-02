import React, { useEffect } from 'react';
import './delivery.css'; // Import CSS file for styling

const Delivery = () => {
    useEffect(() => {
        // Function to handle the parallax effect
        const handleParallax = () => {
            const parallaxElements = document.querySelectorAll('.parallax');
            window.addEventListener('scroll', () => {
                parallaxElements.forEach(element => {
                    const distance = window.scrollY;
                    element.style.transform = `translateY(${distance * 0.5}px)`; // Adjust the multiplier for desired parallax effect
                    const textElement = element.querySelector('.parallax-text');
                    textElement.style.transform = `translate(-50%, calc(-50% + ${distance * 0.3}px))`; // Adjust the multiplier for text movement
                });
            });
        };

        handleParallax();

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleParallax);
        };
    }, []);

    return (
        <div className="delivery-container">
            <div className="parallax">
                <img src="https://i.ibb.co/DLXLvf5/online-delivery-phone-concept-fast-600nw-1609947532.webp" alt="Parallax Image" />
                <div className="parallax-text">
                    <h2>Delivery Information</h2>
                    <p>Insert your delivery information text here...</p>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
