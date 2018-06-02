import React, { Component } from 'react';
import styled from 'styled-components';

const Column = styled.div`
    display: flex;
    height: 600px;
    justify-content: space-around;
    width: 600px;

    /* Full HD desktop */
    @media (min-width: 900px) and (min-height: 800px) {
        height: 700px;
        width: 700px;
    }

    /* Desktop */
    @media (max-width: 700px) {
        height: 500px;
        width: 500px;
    }

    @media (max-width: 600px) {
        height: 400px;
        width: 400px;
    }

    @media (max-width: 500px) {
        height: 300px;
        width: 300px;
    }

    /* Mobile landscape */
    @media (max-width: 700px) and (max-height: 500px) {
        height: 200px;
        width: 300px;
    }
`;

const FaceRecognitionBox = styled.div`
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid #0a0a0a;
    border-bottom: 0;
    border-top-left-radius: .4rem;
    border-top-right-radius: .4rem;
    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    display: flex;
    overflow: scroll;
    text-align: center;
    height: 100%;
    width: 100%;
`;

const Image = styled.figure`
    display: block;
    margin: 0 auto;
    max-width: 90%;
    max-height: 90%;
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
                    <span style={{marginTop: "-50px"}}>{box.data.age} Years Old</span>
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