import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Col, Row} from 'react-bootstrap';
import './ProfileHeader.css';

export class ProfileHeader extends Component {
    render() {
        return (
            <div className="white-bg profile-header-ctn">
                <div className="profile-header-top">
                    <div className="profile-img-ctn">
                        <Image src={require('../images/company.jpg')} roundedCircle fluid className="profile-img"/>
                    </div>
                </div>
                <div  className="d-flex profile-details-ctn">
                    <Col xs={12} md={6} lg={6} className="respond-profile">
                        <div className="fs-18 b-600">Multi Indah Teknik</div>
                        <div className= "fs-14">Serving since March 2017 &#07; Verified</div>
                    </Col>
                    <Col xs={12} md={6} lg={6}  className="aligned-right no-shrink">
                        <Row className="flex-end">
                            <Col xs={6} lg={4}>
                                <div className="b-600">1,323</div>
                                <div className="fs-14">Jobs completed</div>
                            </Col>
                            <Col xs={3} lg={2} className="diveder-lr">
                                <div className="b-600">&#9733; 4.3</div>
                                <div className="fs-14">Ratings</div>
                            </Col>
                            <Col xs={3} lg={2}>
                                <div className="b-600">805</div>
                                <div className="fs-14">Reviews</div>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </div>
        )
    }
}

export default ProfileHeader
