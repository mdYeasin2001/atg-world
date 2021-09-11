import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../../assets/images/logo.png';
import CreateAccountModal from '../modals/CreateAccountModal';
import SignInModal from '../modals/SignInModal';
import user_img from '../../assets/images/users/user_1.png'
import rectangle from '../../assets/images/Rectangle.png';
import Oval from '../../assets/images/Oval.png';
import Path from '../../assets/images/Path.png';

const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
    const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
    const toggleShowCreateAccountModal = () => setShowCreateAccountModal(prev => !prev)
    const [showSignInModal, setShowSignInModal] = useState(false);
    const toggleShowSignInModal = () => setShowSignInModal(prev => !prev);
    return (
        <>
            <CreateAccountModal
                showModal={showCreateAccountModal}
                toggleShowModal={toggleShowCreateAccountModal}
                toggleShowSignInModal={toggleShowSignInModal}
            />
            <SignInModal
                showModal={showSignInModal}
                toggleShowModal={toggleShowSignInModal}
                toggleShowCreateAccountModal={toggleShowCreateAccountModal}
                setIsLoggedIn={setIsLoggedIn}
            />
            <div className="Navbar__container">
                <div className="d-none d-md-block">
                    <div className="d-flex align-items-center justify-content-between">
                        <img className="img-fluid logo" src={logo} alt="logo" />
                        <div className="search_box">
                            <input className="form-control w-100 rounded-pill bg-light border-0" type="text" placeholder="Search Here" />
                            <AiOutlineSearch className="search_icon" />
                        </div>
                        <div>
                            {isLoggedIn ?
                                <div>
                                    <img src={user_img} alt="user" />
                                    <span className="ms-2">User Name</span>
                                </div>
                                :
                                <p className="d-flex align-items-center">
                                    <span>create account.</span><span onClick={toggleShowCreateAccountModal} className="btn btn-link">It's free!</span>
                                </p>
                            }
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end d-md-none">
                    <img className="shape mx-2" src={rectangle} alt="" />
                    <img className="shape mx-2" src={Oval} alt="" />
                    <img onClick={toggleShowCreateAccountModal} className="shape mx-2" src={Path} alt="" />
                </div>
            </div>
        </>
    );
};

export default Navbar;