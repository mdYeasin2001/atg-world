import React, { useRef, useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { FaPencilAlt } from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';

const Location = () => {
    const [textEditMode, setTextEditMode] = useState(false);
    const [location, setLocation] = useState('Noida, India');
    const locationRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(locationRef.current.value);
        setTextEditMode(false);
        e.target.reset();
    }

    return (
        <div className="mt-5 Location__container">
            <div className="border-bottom d-flex align-items-center pb-1">
                <IoLocationOutline />
                {textEditMode ?
                    <form onSubmit={handleSubmit}>
                        <input ref={locationRef} defaultValue={location} type="text" autoFocus placeholder="Enter your location" />
                    </form>
                    :
                    <span>{location}</span>
                }
                {textEditMode ?
                    <MdCancel style={{ cursor: 'pointer' }} onClick={() => setTextEditMode(prev => !prev)} className="ms-auto fs-5" />
                    :
                    <FaPencilAlt style={{ cursor: 'pointer' }} onClick={() => setTextEditMode(prev => !prev)} className="ms-auto fs-5" />
                }
            </div>
            <p className="text-muted lead fs-6 mt-3"><RiErrorWarningLine /> Your location will help us serve better and extend personalize experience.</p>
        </div>
    );
};

export default Location;