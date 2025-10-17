"use client";
import React, { useState, useEffect } from 'react';

// --- Configuration ---
const QR_CODE_IMAGE_URL = "https://res.cloudinary.com/dxenuee4n/image/upload/v1760436963/Check_Out_Us_On_Google_-_Adhunik_HVAC_Projects_Business_Profile_bkk1at.webp";

// Google Logo SVG 
const GoogleIcon = ({ size = 28 }) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#fff">
        <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.75 8.36,4.73 12.19,4.73C15.28,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.19,2C6.42,2 2.03,6.8 2.03,12C2.03,17.2 6.42,22 12.19,22C17.96,22 21.54,17.2 21.54,12.33C21.54,11.69 21.48,11.38 21.35,11.1Z" />
    </svg>
);

// Cross (X) Icon SVG
const CloseIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width={size} height={size}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const GooglePopupButton = () => {
    const [isGooglePopupOpen, setIsGooglePopupOpen] = useState(false);

    const openGooglePopup = () => {
        setIsGooglePopupOpen(true);
    };

    const closeGooglePopup = () => {
        setIsGooglePopupOpen(false);
    };

    // Handler to close the modal if the backdrop is clicked.
    const handleBackdropClick = (e) => {
        // Only close if the click occurred on the parent (the backdrop), not the modal content
        if (e.target === e.currentTarget) {
            closeGooglePopup();
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isGooglePopupOpen) {
                closeGooglePopup();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isGooglePopupOpen]);

    return (
        <>
            <div className="relative group transition-all duration-500 hover:-translate-y-2">
                <div className="relative group/tooltip">
                    <button
                        onClick={openGooglePopup}
                        className="w-14 h-14 bg-[#4285F4] hover:bg-[#5C94F9] rounded-full p-2 text-white shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-500/50 flex items-center justify-center"
                        aria-label="Google QR Code"
                    >
                        <GoogleIcon />
                    </button>
                    <span
                        className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-gray-700 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none"
                    >
                        Google QR Code
                    </span>
                </div>
            </div>
            
            {isGooglePopupOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center transition-opacity duration-300"
                    // Added back the backdrop click handler
                    onClick={handleBackdropClick}
                >
                    <div 
                        className="relative bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-11/12 mx-4 transition-transform duration-300 transform scale-100"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="googleModalTitle"
                    >
                        {/* The close button is also present as an alternative method. */}
                        <button
                            onClick={closeGooglePopup}
                            className="absolute top-3 right-3 p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition-colors duration-200"
                            aria-label="Close modal"
                        >
                            <CloseIcon size={20} />
                        </button>

                        <img
                            src={QR_CODE_IMAGE_URL}
                            alt="Google QR Code for Reviews/Maps"
                            width={400}
                            height={400}
                            className="w-full h-auto rounded-xl shadow-lg"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/EF4444/FFFFFF?text=Image+Error"; }}
                        />
                        
                        <p className="text-center text-sm text-gray-500 mt-4">
                            Scan the QR to visit our Google profile.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default GooglePopupButton;