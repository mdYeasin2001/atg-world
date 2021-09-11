import React from 'react';
import { Card, Dropdown, Button } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { BiShareAlt } from 'react-icons/bi';

const PostCard = ({ postData }) => {
    const { title, category, post_img, description, category_icon, author_name, author_img, views } = postData;
    return (
        <Card className="my-2 PostCard__container">
            <Card.Img className="img-fluid" variant="top" src={post_img} />
            <Card.Body>
                <p className="fw-bold">{category_icon} {category}</p>
                <div className="d-flex align-items-start">
                    <Card.Title className="me-5 display-6 fw-bold fs-5">{title}</Card.Title>
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
                <Card.Text className="text-muted lead fs-5">{description}</Card.Text>
                <div className="d-flex align-items-center">
                    <div>
                        <img src={author_img} className="img-fluid me-3" alt="author" />
                        <span className="fw-bold">{author_name}</span>
                    </div>
                    <p className="ms-auto me-2 mt-3"><AiOutlineEye /> {views} views</p>
                    <Button className="btn btn-light"><BiShareAlt className="fw-bold fs-5" /></Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default PostCard;