import React, { Component } from 'react'
import './Gallery.css';

export class Gallery extends Component {
    render() {
        return (
            <div className="blue-border common-pad mt-20 white-bg">
                <div className="componentTitle b-600">Gallery</div>
                <div className="d-flex">
                    <div className="gallery1 photo"></div>
                    <div className="gallery2 photo"></div>
                    <div className="gallery3 photo"></div>
                    <div className="photo d-flex view-btn">
                        +12
                        <br/>
                        view all
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery
