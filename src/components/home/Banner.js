import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="Banner__container text-white">
            <div className="px-3 pt-3 d-md-none d-flex justify-content-between">
                <a href="/" className="back_arrow"><FaArrowLeft /></a>
                <button className="btn btn-light">Join Group</button>
            </div>
            <div className="px-md-5 px-3 pb-4 h-100 d-flex align-items-end">
                <div className="pb-4">
                    <h1>Computer Engineering</h1>
                    <p>142,765 Computer Engineer follow this</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;