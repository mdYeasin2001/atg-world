import React from 'react';
import { Modal, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { IoLogoFacebook } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import illustration_img from '../../assets/images/illustration.png';

const CreateAccountModal = ({ showModal, toggleShowModal, toggleShowSignInModal }) => {
    return (
        <Modal
            show={showModal}
            onHide={toggleShowModal}
            backdrop="static"
            keyboard={false}
            size="lg"
            centered
            className="CreateAccountModal__container"
        >
            <Modal.Header className="pb-0 border-0" closeButton>
                <p className="d-none text-success d-lg-block"><small>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤟</small></p>
                <h2 className="d-lg-none">Create Account</h2>
            </Modal.Header>
            <Modal.Body className="pb-4">
                <Row>
                    <Col>
                        <h2 className="d-none d-lg-block pb-3">Create Account</h2>
                        <InputGroup>
                            <FormControl placeholder="First Name" aria-label="First name" />
                            <FormControl placeholder="last Name" aria-label="Last name" />

                        </InputGroup>
                        <FormControl type="email" placeholder="Email" aria-label="First name" />
                        <FormControl type="password" placeholder="Password" aria-label="Last name" />
                        <FormControl type="password" placeholder="Confirm Password" aria-label="Last name" />
                        <div className="d-flex d-lg-block align-items-center justify-content-between">
                            <Button className="rounded-pill create_account_btn my-4">Create Account</Button>
                            <span onClick={() => {
                                toggleShowSignInModal();
                                toggleShowModal()
                            }} className="btn btn-link d-lg-none">or, Sign in</span>
                        </div>
                        <Button variant="light" className="w-100 border-secondary"><IoLogoFacebook className="me-2 text-primary" />Sign up with Facebook</Button>
                        <Button variant="light" className="w-100 mt-3 border-secondary"><FcGoogle className="me-2" />Sign up with Google</Button>
                        <p className="d-lg-none text-center pt-3"><small>By signup, you are agree to our tram & conditions, Privacy Policy</small></p>
                    </Col>
                    <Col className="d-none d-lg-block">
                        <p className="d-flex align-items-center justify-content-end"><span>Already have an account?</span><span onClick={() => {
                            toggleShowSignInModal();
                            toggleShowModal()
                        }} className="btn btn-link">Sign in</span></p>
                        <div className="my-4">
                            <img className="img-fluid" src={illustration_img} alt="img" />
                        </div>
                        <p><small>By signup, you are agree to our tram & conditions, Privacy Policy</small></p>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default CreateAccountModal;