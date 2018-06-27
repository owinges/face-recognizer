import React, { Component } from 'react';
import styled from 'styled-components';

const Column = styled.div`
    display: flex;
    height: 70vh;
    justify-content: space-around;
    width: 90vw;
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
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const Image = styled.figure`
    align-items: center;
    display: flex;
    justify-content: center;
    overflow: scroll;
    position: relative;
    height: 100%;
    width: 100%;
    img {
        height: auto;
        width: auto;
        max-height: 80%;
        max-width: 80%;
    }
`;

const BoundingBox = styled.div`
    position: absolute;
    /* box-shadow: 0 0 0 3px #149df2 inset; */
    box-shadow: 0 0 0 3px ${props => props.theme.primary} inset;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const AgeBox = styled.span`
    background-color: ${props => props.theme.primary};
    border-radius: 10rem;
    color: black;
    display: inline-block;
    padding: 1rem 2rem;
    position: relative;
    top: -5rem;
`;

export default class FaceRecognition extends Component {
    displayFaceBoxes (boxes) {
        return boxes.map((box, index) => {
            return (                    
                <BoundingBox
                    style={{
                        top: box.topRow,
                        right: box.rightCol,
                        bottom: box.bottomRow,
                        left: box.leftCol
                    }}
                    key={index}
                >
                    <AgeBox>{box.data.age} Years Old</AgeBox>
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