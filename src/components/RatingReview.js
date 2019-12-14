import React, { Component } from 'react';
import {DropdownButton, ProgressBar, Button, Dropdown, Image, Row, Col} from 'react-bootstrap';
import './RatingReview.css';

export class RatingReview extends Component {
    render() {
        return (
            <div className="blue-border white-bg mt-20 common-pad">
                <div>
                    <div className="componentTitle b-600">Ratings &#38; Reviews</div>
                    <Row className="pt-10">
                        <Col lg={8}>
                            <Row className="align-item-center">
                                <Col xs={1} md={1} lg={1}>5</Col>
                                <Col xs={11} md={11} lg={11} className="pl-0"><ProgressBar variant="success" now={50} /></Col>
                            </Row>
                            <Row className="align-item-center">
                                <Col xs={1} md={1} lg={1}>4</Col>
                                <Col xs={11} md={11} lg={11} className="pl-0"><ProgressBar now={30} /></Col>
                            </Row>
                            <Row className="align-item-center">
                                <Col xs={1} md={1} lg={1}>3</Col>
                                <Col xs={11} md={11} lg={11} className="pl-0"><ProgressBar variant="info" now={60} /></Col>
                            </Row>
                            <Row className="align-item-center">
                                <Col xs={1} md={1} lg={1}>2</Col>
                                <Col xs={11} md={11} lg={11} className="pl-0"><ProgressBar variant="warning" now={20} /></Col>
                            </Row>
                            <Row className="align-item-center">
                                <Col xs={1} md={1} lg={1}>1</Col>
                                <Col xs={11} md={11} lg={11} className="pl-0"><ProgressBar variant="danger" now={10} /></Col>
                            </Row>
                        </Col>
                        <Col lg={4} className="text-align-center respond-mt-20">
                            <div className="fs-18 b-600">4.3</div>
                            <div>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                            <div className="fs-14">134 ratings</div>
                        </Col>
                    </Row>
                </div>
                <div className="pt-40">
                    <div className="componentTitle b-600">Compliments</div>
                    <Row>
                        <Col md={5} lg={5} className="blue-border compliment-ctn">
                            <div className="img-ctn">
                                <Image src={require('../images/price.png')} rounded fluid />
                            </div>
                            <div className="pl-10">
                                <div className="fs-14 b-600">Reasonable Price</div>
                                <div className="fs-13"></div>
                            </div>
                        </Col>
                        <Col md={5} lg={5} className="blue-border compliment-ctn">
                            <div className="img-ctn">
                                <Image src={require('../images/good.png')} rounded fluid />
                            </div>
                            <div className="pl-10">
                                <div className="fs-14 b-600">Excellent service</div>
                                <div className="fs-13">78 compliments</div>
                            </div>
                        </Col>
                        <Col md={5} lg={5} className="blue-border compliment-ctn">
                            <div className="img-ctn">
                                <Image src={require('../images/fast.png')} rounded fluid />
                            </div>
                            <div className="pl-10">
                                <div className="fs-14 b-600">Fast &#38; Efficient</div>
                                <div className="fs-13">92 compliments</div>
                            </div>
                        </Col>
                        <Col  md={5} lg={5} className="blue-border compliment-ctn">
                            <div className="img-ctn">
                                <Image src={require('../images/value.png')} rounded fluid />
                            </div>
                            <div className="pl-10">
                                <div className="fs-14 b-600">Value for money</div>
                                <div className="fs-13">60 compliments</div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="pt-40">
                    <Row className="align-item-center">
                        <div className="componentTitle b-600 plr-15">Reviews</div>
                        <div>
                            <DropdownButton id="dropdown-basic-button" title="Recently Added">
                                <Dropdown.Item>One week ago</Dropdown.Item>
                                <Dropdown.Item>One months ago</Dropdown.Item>
                                <Dropdown.Item>All</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </Row>
                    <div className="review-divide">
                        <div className="review-ctn">
                            <div className="img-ctn">
                                <Image src={require('../images/people1.png')} roundedCircle fluid/>
                            </div>
                            <div className="pl-10">
                                <div className="review-details">
                                    <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                    <span className="reviewer-name">Alex Tenorio</span>
                                    <span>3 months ago</span>
                                </div>
                                <div className="review">
                                    Habitasse fringilla conubia et fames fusce curae consectetuer vehicula vitae semper at sodales at. Curabitur tempus habitasse suspendisse tortor nullam scelerisque morbi dui dignissim. 
                                </div>
                            </div>
                        </div>
                        <div className="review-ctn">
                            <div className="img-ctn">
                                <Image src={require('../images/people2.png')} roundedCircle fluid/>
                            </div>
                            <div className="pl-10">
                                <div className="review-details">
                                    <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                    <span className="reviewer-name">Alex Tenorio</span>
                                    <span>3 months ago</span>
                                </div>
                                <div className="review">
                                    Habitasse fringilla conubia et fames fusce curae consectetuer vehicula vitae semper at sodales at. Curabitur tempus habitasse suspendisse tortor nullam scelerisque morbi dui dignissim. 
                                </div>
                            </div>
                        </div>
                        <div className="review-ctn">
                            <div className="img-ctn">
                                <Image src={require('../images/people3.png')} roundedCircle fluid/>
                            </div>
                            <div className="pl-10">
                                <div className="review-details">
                                    <span>&#9733;&#9733;&#9733;</span>
                                    <span className="reviewer-name">Erika Mento</span>
                                    <span>5 months ago</span>
                                </div>
                                <div className="review">
                                    Habitasse fringilla conubia et fames fusce curae consectetuer vehicula vitae semper at sodales at. Curabitur tempus habitasse suspendisse tortor nullam scelerisque morbi dui dignissim. 
                                </div>
                            </div>
                        </div>
                        <div className="review-ctn">
                            <div className="img-ctn">
                                <Image src={require('../images/people1.png')} roundedCircle fluid/>
                            </div>
                            <div className="pl-10">
                                <div className="review-details">
                                    <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                    <span className="reviewer-name">Mar Rueda</span>
                                    <span>5 months ago</span>
                                </div>
                                <div className="review">
                                    Habitasse fringilla conubia et fames fusce curae consectetuer vehicula vitae semper at sodales at. Curabitur tempus habitasse suspendisse tortor nullam scelerisque morbi dui dignissim. 
                                    <br/>
                                    +2 compliments
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="loadmore-btn-ctn">
                        <Button>Load more...</Button>
                    </div>
                </div>

            </div>
        )
    }
}

export default RatingReview
