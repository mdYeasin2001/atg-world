import React from 'react';
import { Modal, Button, Row, Col, FormControl } from 'react-bootstrap';
import { IoLogoFacebook } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import illustration_img from '../../assets/images/illustration.png';

const SignInModal = ({ showModal, toggleShowModal, toggleShowCreateAccountModal, setIsLoggedIn }) => {
    return (
        <Modal
            show={showModal}
            onHide={toggleShowModal}
            backdrop="static"
            keyboard={false}
            size="lg"
            centered
            className="SignInModal__container"
        >
            <Modal.Header className="pb-0 border-0" closeButton>
                <p className="d-none text-success d-lg-block"><small>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤟</small></p>
                <h2 className="d-lg-none">Sign In</h2>
            </Modal.Header>
            <Modal.Body className="pb-4">
                <Row>
                    <Col>
                        <h2 className="d-none d-lg-block pb-3">Sign In</h2>
                        <FormControl type="email" placeholder="Email" aria-label="First name" />
                        <FormControl type="password" placeholder="Password" aria-label="Last name" />
                        <div className="d-flex d-lg-block align-items-center justify-content-between">
                            <Button onClick={() => {
                                setIsLoggedIn(prev => !prev);
                                toggleShowModal();
                            }} className="rounded-pill sing_in_btn my-4">Sign In</Button>
                            <span onClick={() => {
                                toggleShowCreateAccountModal();
                                toggleShowModal();
                            }} className="btn btn-link d-lg-none">or, Create account</span>
                        </div>
                        <Button variant="light" className="w-100 border-secondary"><IoLogoFacebook className="me-2 text-primary" />Sign up with Facebook</Button>
                        <Button variant="light" className="w-100 mt-3 border-secondary"><FcGoogle className="me-2" />Sign up with Google</Button>
                        <p className="d-lg-none text-center pt-3"><small>Forgot Password?</small></p>
                    </Col>
                    <Col className="d-none d-lg-block">
                        <p className="d-flex align-items-center justify-content-end"><span>Don't have an account yet?</span><span onClick={() => {
                            toggleShowCreateAccountModal();
                            toggleShowModal();
                        }} className="btn btn-link">Create new for free!</span></p>
                        <div className="my-4">
                            <img className="img-fluid" src={illustration_img} alt="img" />
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default SignInModal;