import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import group_img_1 from '../../assets/images/users/user_1.png';
import group_img_2 from '../../assets/images/users/user_2.png';
import group_img_3 from '../../assets/images/users/user_3.png';
import group_img_4 from '../../assets/images/users/user_4.png';

const RecommendedGroups = () => {
    return (
        <div className="mt-5">
            <h6 className="fw-normal"><AiFillLike className="me-2 fs-5" />RECOMMENDED GROUPS</h6>

            <div className="d-flex align-items-center my-2">
                <img src={group_img_1} alt="group_img" />
                <span className="fw-bold ms-2">Activism</span>
                <button className="btn btn-light rounded-pill ms-auto">Follow</button>
            </div>

            <div className="d-flex align-items-center my-2">
                <img src={group_img_2} alt="group_img" />
                <span className="fw-bold ms-2">MBA</span>
                <button className="btn btn-light rounded-pill ms-auto">Follow</button>
            </div>

            <div className="d-flex align-items-center my-2">
                <img src={group_img_3} alt="group_img" />
                <span className="fw-bold ms-2">Philosophy</span>
                <button className="btn btn-light rounded-pill ms-auto">Follow</button>
            </div>

            <div className="d-flex align-items-center my-2">
                <img src={group_img_4} alt="group_img" />
                <span className="fw-bold ms-2">Leisure</span>
                <button className="btn btn-light rounded-pill ms-auto">Follow</button>
            </div>

            <p className="text-primary text-end mt-4">See More...</p>
        </div>
    );
};

export default RecommendedGroups;