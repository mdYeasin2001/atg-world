import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPencilSquare } from 'react-icons/bs';
import { GiMicroscope } from 'react-icons/gi';
import PostCard from './PostCard';
import post_1 from '../../assets/images/post_1.png';
import post_2 from '../../assets/images/post_2.png';
import user_1 from '../../assets/images/users/user_1.png';
import user_2 from '../../assets/images/users/user_2.png'
import MeetupPostCard from './MeetupPostCard';
import JobPostCard from './JobPostCard';
import Location from './Location';
import RecommendedGroups from './RecommendedGroups';


const Posts = ({ isLoggedIn }) => {
    const posts = [
        {
            id: "1",
            category: "Article",
            post_img: post_1,
            title: "What if famous brands had regular fonts? Meet RegulaBrands!",
            description: "T've worked in UX for the better part of a decade. From now on, I plan to rei...",
            author_name: "Sarthak Kamra",
            author_img: user_1,
            category_icon: <BsPencilSquare />,
            views: "1.4k"
        },
        {
            id: "2",
            category: "Education",
            post_img: post_2,
            title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
            description: "T've worked in UX for the better part of a decade. From now on, I plan to rei...",
            author_name: "Sarah West",
            author_img: user_2,
            category_icon: <GiMicroscope />,
            views: "1.3k"
        },
    ]
    return (
        <Container>
            <Row>
                <Col md={8}>
                    {posts.map(post => <PostCard key={post.id} postData={post} />)}
                    <MeetupPostCard />
                    <JobPostCard />
                </Col>
                <Col md={4}>
                    <Location />
                    {isLoggedIn && <RecommendedGroups />}
                </Col>
            </Row>
        </Container>
    );
};

export default Posts;