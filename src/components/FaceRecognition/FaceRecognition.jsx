import React, { Component } from 'react';

import './FaceRecognition.css';

export default class FaceRecognition extends Component {
    displayFaceBoxes (boxes) {
        return boxes.map((box, index) => {
            return (
                <div
                    className="bounding-box"
                    style={{ top: box.topRow,
                            right: box.rightCol,
                            bottom: box.bottomRow,
                            left: box.leftCol
                        }}
                    key={index}
                >
                </div>
            );
        })
    }

    render () {
        const { boxes, imageUrl } = this.props;

        return (
            <div className='container'>
                <div className='face-recognition-box has-text-centered'>
                    <div className='image'>
                        <img id='inputImage' src={imageUrl} alt='' />
                        {this.displayFaceBoxes(boxes)}
                    </div>
                    <p className='is-size-4'>
                        Enter an image URL below and I will detect faces in the picture!
                    </p>
                </div>
            </div>
        );
    }
}