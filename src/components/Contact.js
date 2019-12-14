import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div className="mt-20 blue-border white-bg common-pad">
                <div>
                    <div className="b-600 fs-14">Contact Person</div>
                    <div className="fs-14">Ahmad Faris</div>
                </div>
                <div>
                    <div className="ptb-15">
                        <div className="b-600 fs-14">Company address</div>
                        <div className="fs-14 lh-1four">Mutiara Serdang, 6-31, Jalan Serdang Raya, 43300, Seri Kembangan, Selangor</div>
                    </div>
                    <div>
                        <div className="b-600 fs-14">Registration no</div>
                        <div className="fs-14">002503879-H</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
