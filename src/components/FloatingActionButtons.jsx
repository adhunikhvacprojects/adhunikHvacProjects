
"use client"
import GooglePopupButton from './GooglePopupButton';
import WatsapButton from './watsap';

const FloatingActionButtons = () => {
    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-row items-end space-x-4">
            <GooglePopupButton />
            <WatsapButton phoneNumber="+919599050534" />
        </div>
    );
};

export default FloatingActionButtons;