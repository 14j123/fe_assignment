import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import './RelatedService.css';

export class RelatedService extends Component {
    render() {
        return (
            <div className="blue-border white-bg mt-20 common-pad">
                <div className="componentTitle b-600">Related Service</div>
                <div className="pt-10">
                    <div className="d-flex flex-nowrap pt-15">
                        <div className="img-div">
                            <Image src={require('../images/aircon.png')} rounded fluid className="service-img"/>
                        </div>
                        <div className="pl-10">
                            <div className="b-600 fs-14">Aircond services</div>
                            <div className="fs-14 lh-1four">Lorem ipsum dolor sit amet, consectetur adipisicing</div>
                        </div>
                    </div>
                    <div className="d-flex flex-nowrap pt-15">
                        <div className="img-div">
                            <Image src={require('../images/plumb.png')} rounded fluid className="service-img"/>
                        </div>
                        <div className="pl-10">
                            <div className="b-600 fs-14">Plumbing services</div>
                            <div className="fs-14 lh-1four">Lorem ipsum dolor sit amet, consectetur adipisicing</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RelatedService
