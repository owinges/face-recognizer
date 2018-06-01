import React, { Component } from 'react';
import styled from 'styled-components';

const Column = styled.div`
    display: flex;
    height: 600px;
    justify-content: space-around;
    width: 600px;
`;

const FaceRecognitionBox = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: .5rem;
    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    display: flex;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
`;

const Image = styled.figure`
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
    overflow: scroll;
    position: relative;

    img {
        display: block;
        margin: 0 auto;
    }
`;

const BoundingBox = styled.div`
    position: absolute;
    box-shadow: 0 0 0 3px #149df2 inset;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
`;

export default class FaceRecognition extends Component {
    displayFaceBoxes (boxes) {
        return boxes.map((box, index) => {
            return (
                <BoundingBox
                    style={{ top: box.topRow,
                            right: box.rightCol,
                            bottom: box.bottomRow,
                            left: box.leftCol
                        }}
                    key={index}
                >
                </BoundingBox>
            );
        })
    }

    render () {
        const { boxes, imageUrl } = this.props;

        return (
            <Column>
                <FaceRecognitionBox>
                    <Image>
                        <img id='inputImage' src={imageUrl} alt='' />
                        {this.displayFaceBoxes(boxes)}
                    </Image>
                </FaceRecognitionBox>
            </Column>
        );
    }
}