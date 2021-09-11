import React, { useState } from 'react';
import Banner from '../components/home/Banner';
import PostNav from '../components/home/PostNav';
import Posts from '../components/home/Posts';
import Navbar from '../components/common/Navbar';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Banner />
            <PostNav />
            <Posts isLoggedIn={isLoggedIn}/>
        </>
    );
};

export default Home;