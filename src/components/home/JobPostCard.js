import React from 'react';
import { Card, Dropdown, Button } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { BiShareAlt } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import { IoBagOutline, IoBagSharp } from 'react-icons/io5';
import author_img from '../../assets/images/users/user_4.png'

const JobPostCard = () => {
    return (
        <Card className="my-2 PostCard__container">
            <Card.Body>
                <p className="fw-bold"><IoBagSharp /> Job</p>
                <div className="d-flex align-items-start">
                    <Card.Title className="me-5 display-6 fw-bold fs-5">Finance & Investment Elite Social Mixer @Lujiazui</Card.Title>
                    <Dropdown className="ms-auto">
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            <BsThreeDots className="fs-5 fw-bold" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Edit</Dropdown.Item>
                            <Dropdown.Item>Report</Dropdown.Item>
                            <Dropdown.Item>Action 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <p><span className="me-5"><IoBagOutline /> Innovaccer analytical Private Ltd.</span> <span><GrLocation /> Norida, India</span></p>
                <button className="btn btn-outline-light border-secondary fw-bold text-success w-100">Apply on Times Jobs</button>
                <div className="d-flex align-items-center">
                    <div>
                        <img src={author_img} className="img-fluid me-3" alt="author" />
                        <span className="fw-bold">Joseph Gray</span>
                    </div>
                    <p className="ms-auto me-2 mt-3"><AiOutlineEye /> 1.4k views</p>
                    <Button className="btn btn-light"><BiShareAlt className="fw-bold fs-5" /></Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default JobPostCard;