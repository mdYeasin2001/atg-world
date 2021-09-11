import React from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { RiGroupFill } from 'react-icons/ri';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaPencilAlt } from 'react-icons/fa';

const PostNav = () => {
    return (
        <Container className="PostNav__container py-1">
            <Row className="d-none d-md-block">
                <Col>
                    <Nav fill variant="tabs" defaultActiveKey="/">
                        <Nav.Item>
                            <Nav.Link href="/">All Post(32)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Article</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Event</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Education</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Job</Nav.Link>
                        </Nav.Item>
                        <Button className="ms-auto me-2" variant="light">Write a Post <IoMdArrowDropdown /></Button>
                        <Button variant="primary"><RiGroupFill /> Join Group</Button>
                    </Nav>
                </Col>
            </Row>
            <div className="write_a_post_icon d-md-none">
                <FaPencilAlt />
            </div>
        </Container>
    );
};

export default PostNav;