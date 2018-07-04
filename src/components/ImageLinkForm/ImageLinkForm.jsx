import React, { Component } from 'react';
import styled from 'styled-components';

const TogglerBox = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 900px;

    @media only screen and (max-width: 500px) {
        /* width: 400px; */
        width: 100vw;
        position: absolute;
        bottom: 0;
    }
`;

const FormBox = styled.div`
    align-items: center;
    background: ${props => props.theme.background};
    border: 1px solid #0a0a0a;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: center;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    z-index: 1999;
`;

const Form = styled.div`
    display: flex;
    justify-content: center;
    height: 3rem;
    width: 90%;
    margin-top: 5rem;
`;

const Input = styled.input`
    background-color: ${props => props.theme.secondary};
    border: 1px solid #0a0a0a;
    /* border-bottom-left-radius: .4rem; */
    border-right: 0;
    box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
    color: #0a0a0a;
    display: flex;
    font-size: 1.75rem;
    height: 4rem;
    max-width: 80%;
    padding: 2rem;
    width: 80%;
`;

const Button = styled.button`
    background-color: ${props => props.theme.secondary};
    border: 1px solid #0a0a0a;
    /* border-bottom-right-radius: .4rem; */
    box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
    color: #0a0a0a;
    cursor: pointer;
    display: flex;
    font-size: 2.5rem;
    height: 4.2rem;
    padding: .5rem 2rem;
    width: 20%;
    max-width: 20%;

    &:hover {
        background-color: ${props => props.theme.tertiary};
        color: white;
    }
`;

const Toggler = styled.button`
    background-color: ${props => props.theme.secondary};
    border: 1px solid #0a0a0a;
    box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
    color: #0a0a0a;
    cursor: pointer;
    display: flex;
    font-size: 2.5rem;
    height: 4.2rem;
    padding: .5rem 2rem;
    transform: translate(-0.4rem, -4.6rem);

    &:hover {
        background-color: ${props => props.theme.tertiary};
        color: white;
    }

    @media only screen and (max-width: 500px) {
        transform: translate(-1rem, -1rem);
    }
`;

class ImageLinkForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayForm: false
        }
    }

    handleUploadImage = (ev) => {
        ev.preventDefault();

        var file = this.uploadInput.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const regex = /[,]/g;
            const cutOff = event.target.result.search(regex);
            const byteString = event.target.result.substring((cutOff + 1));
            console.log(byteString);
            this.props.fileSubmit(event.target.result, byteString);
        };
        
        this.toggleDisplay();
        reader.readAsDataURL(file);
    }

    handleUrlSubmit = () => {
        this.toggleDisplay();
        this.props.urlSubmit();
    }

    toggleDisplay = () => {
        this.setState({ displayForm: !this.state.displayForm });
    }

    render () {
        const { inputChange } = this.props;
        const { displayForm } = this.state;
        
        return (
            (!displayForm ? (
                <TogglerBox>
                    <Toggler onClick={this.toggleDisplay}>Select Image</Toggler>
                </TogglerBox>
            ) : (
                <FormBox>
                    <Form>
                        <Input type='text' placeholder='Enter an image URL' onChange={inputChange} />
                        <Button onClick={this.handleUrlSubmit}>Detect</Button>
                    </Form>
                    <Form>
                        <input ref={(ref) => { this.uploadInput = ref; }} type='file' accept='image/*' />
                        <Button onClick={this.handleUploadImage}>Detect</Button>
                    </Form>
                </FormBox>
            ))
        );
    }
}

export default ImageLinkForm;