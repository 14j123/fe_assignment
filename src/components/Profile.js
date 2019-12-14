import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from 'react-bootstrap';
import ProfileHeader from './ProfileHeader';
import About from './About';
import Gallery from './Gallery';
import RatingReview from './RatingReview';
import Request from './Request';
import Contact from './Contact';
import RelatedServie from './RelatedService';
import './Profile.css';

export class Profile extends Component {
    render() {
        return (
            <Container>
                <ProfileHeader />
                <Row className="content-part">
                    <Col lg={8}>
                        <About/>
                        <Gallery/>
                        <RatingReview/>
                    </Col>
                    <Col lg={4}>
                        <Request/>
                        <Contact/>
                        <RelatedServie/>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

export default Profile
