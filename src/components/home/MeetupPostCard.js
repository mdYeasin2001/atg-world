import React from 'react';
import { Card, Dropdown, Button } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { BiShareAlt, BiCalendarAlt, BiCalendar } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import post_img from '../../assets/images/post_3.png';
import author_img from '../../assets/images/users/user_3.png'

const MeetupPostCard = () => {
    return (
        <Card className="my-2 PostCard__container">
            <Card.Img className="img-fluid" variant="top" src={post_img} />
            <Card.Body>
                <p className="fw-bold"><BiCalendarAlt /> Meetup</p>
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
                <p><span className="me-5"><BiCalendar/> Fri, 12 October, 2018</span> <span><GrLocation/> Ahmedabad, India</span></p>
                <button className="btn btn-outline-light border-secondary fw-bold text-danger w-100">visit website</button>
                <div className="d-flex align-items-center">
                    <div>
                        <img src={author_img} className="img-fluid me-3" alt="author" />
                        <span className="fw-bold">Ronal Jones</span>
                    </div>
                    <p className="ms-auto me-2 mt-3"><AiOutlineEye /> 1.4k views</p>
                    <Button className="btn btn-light"><BiShareAlt className="fw-bold fs-5" /></Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default MeetupPostCard;