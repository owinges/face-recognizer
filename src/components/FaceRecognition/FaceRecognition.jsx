import React, { Component } from 'react';
import styled from 'styled-components';

const Column = styled.div`
    display: flex;
    height: 500px;
    justify-content: space-around;
    width: 900px;
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
    position: relative;
    /* height: 100%; */
    /* width: 100%; */
    img {
        /* height: auto; */
        width: auto;
        max-height: 400px;
        max-width: 800px;
    }
`;

const BoundingBox = styled.div`
    position: absolute;
    /* box-shadow: 0 0 0 3px #149df2 inset; */
    box-shadow: 0 0 0 3px ${props => props.theme.primary} inset;
    cursor: default;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    top: ${props => props.sides.top}px;
    right: ${props => props.sides.right}px;
    bottom: ${props => props.sides.bottom}px;
    left: ${props => props.sides.left}px;
    opacity: .5;
    &:hover {
        opacity: 1;
    }
`;

const AgeBox = styled.span`
    background-color: ${props => props.theme.primary};
    border-radius: .5rem;
    color: black;
    height: 2.5rem;
    padding: .5rem 2rem;
    position: relative;
    top: -4rem;
    z-index: 1000;
`;

export default class FaceRecognition extends Component {
    displayFaceBoxes (boxes) {
        return boxes.map((box, index) => {
            return (                    
                <BoundingBox
                    sides={{
                        top: box.topRow,
                        right: box.rightCol,
                        bottom: box.bottomRow,
                        left: box.leftCol
                    }}
                    key={index}
                >
                    <AgeBox>{box.data.age} years old</AgeBox>
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