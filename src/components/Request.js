import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

export class Request extends Component {
    render() {
        return (
            <div className="blue-border white-bg common-pad respond-mt-20">
                <div className="componentTitle b-600">Need this service?</div>
                <div className="fs-15 lh-1half">Hire best service providers for your everyday needs from Kaodim</div>
                <div className="ptb-15">
                    <Button variant="primary" size="lg" block>
                        Submit a request
                    </Button>
                </div>
                <div>
                    <div className="fs-13 lh-1four ptb-3">&#10004; Free insurance coverage</div>
                    <div className="fs-13 lh-1four ptb-3">&#10004; Enjoy re-service or your money back if unsatisfactory</div>
                    <div className="fs-13 lh-1four ptb-3">&#10004; Lowest price guaranteed</div>
                </div>
                <div className="fs-11 pt-20">Terms &#38; conditions apply</div>
            </div>
        )
    }
}

export default Request
