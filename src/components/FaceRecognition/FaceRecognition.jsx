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
            <div className='center ma'>
                <div className='absolute mt2'>
                    <img id='inputImage' src={imageUrl} alt='' width='500px' height='auto'/>
                    {this.displayFaceBoxes(boxes)}
                </div>
            </div>
        );
    }
}