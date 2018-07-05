import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/logo.png';

const Column = styled.div`
    display: flex;
    height: 600px;
    justify-content: space-around;
    width: 900px;

    @media only screen and (max-width: 500px) {
        position: absolute;
        top: 6rem;
        height: calc(100vh - 6rem);
        width: 100vw;
    }
`;

const FaceRecognitionBox = styled.div`
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid #0a0a0a;
    border-top-left-radius: .4rem;
    border-top-right-radius: .4rem;
    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;

    @media only screen and (max-width: 500px) {
        border-left: 0;
        border-radius: 0;
        border-right: 0;
    }
`;

const Image = styled.figure`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;

    img {
        width: auto;
        max-height: 500px;
        max-width: 800px;

        @media only screen and (max-width: 500px) {
            max-height: calc(100vh - 6rem - 2px);
            max-width: 100vw;
        }
    }
`;

const BoundingBox = styled.div`
    position: absolute;
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

    @media only screen and (max-width: 500px) {
        opacity: 1;
    }

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
    top: -4rem;
    width: 10rem;
    position: absolute;
    z-index: 1000;
`;

const LoadingBox = styled.div`
    position: absolute;
    top: 9rem;
    z-index: 2000;
`;

const LoadingText = styled.span`
    color: ${props => props.theme.tertiary};
    display: inline-block;
    font-size: 4rem;
    padding: 0 1rem;
    transform: translateY(-1.6rem);
`;

const Spinner = styled.div`
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    height: 64px;
    width: 64px;
`;

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Rotate = styled.div`
    animation: ${rotate360} 1s linear infinite;
    display: inline-block;
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
                    <AgeBox>{`${box.data.age} years old`}</AgeBox>
                </BoundingBox>
            );
        })
    }

    displayLoader = () => {
        if (this.props.imageUrl.length !== 0 && this.props.boxes.length === 0) {
            return (
                <LoadingBox>
                    <Rotate><Spinner></Spinner></Rotate>
                    <LoadingText>Loading</LoadingText>
                    <Rotate><Spinner></Spinner></Rotate>
                </LoadingBox>
            )
        }
    }

    render () {
        const { boxes, imageUrl } = this.props;

        return (
            <Column>
                <FaceRecognitionBox>
                    {this.displayLoader()}
                    <Image>
                        <img id='inputImage' src={imageUrl} alt='' />
                        {this.displayFaceBoxes(boxes)}
                    </Image>
                </FaceRecognitionBox>
            </Column>
        );
    }
}