import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const TogglerBox = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 900px;

    @media only screen and (max-width: 500px) {
        width: 100vw;
        position: absolute;
        bottom: 0;
    }

    button {
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
    }
`;

const appear = keyframes`
    from {
        opacity: 0;
        transform: translate(10%, 100%);
    }
`;

const FormBox = styled.div`
    animation: ${appear} .4s ease;
    background: ${props => props.theme.background};
    border: 1px solid #0a0a0a;
    border-radius: 2rem;
    left: 50%;
    padding: 2rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    z-index: 1999;

    form {
        display: flex;
        justify-content: center;
        margin-top: 5rem;
        width: 100%;

        input[type='text'] {
            background-color: ${props => props.theme.secondary};
            border: 1px solid #0a0a0a;
            border-right: 0;
            box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
            color: #0a0a0a;
            flex: 1;
            font-size: 1.75rem;
            height: 4rem;
            padding: 2rem;

            @media only screen and (max-width: 500px) {
                width: 70%;
            }
        }

        input[type='file'] {
            /* flex: 1; */
        }

        button {
            background-color: ${props => props.theme.secondary};
            border: 1px solid #0a0a0a;
            box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
            color: #0a0a0a;
            cursor: pointer;
            font-size: 2.5rem;
            height: 4.2rem;
            padding: .5rem 2rem;

            &:hover {
                background-color: ${props => props.theme.tertiary};
                color: white;
            }
        }
    }

    @media only screen and (max-width: 500px) {
        width: 90vw;
    }
`;

class ImageLinkForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayForm: false
        }
    }

    handleUploadImage = (e) => {
        e.preventDefault();

        // Close modal if there is no file
        if (this.refs.uploadInput.files.length === 0) {
            this.toggleDisplay();
            return;
        }

        var file = this.refs.uploadInput.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            // Get only the byte string (remove everything before it)
            const regex = /[,]/g;
            const cutOff = event.target.result.search(regex);
            const byteString = event.target.result.substring((cutOff + 1));
            // Use image URL to display the image, send byte string to the API
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
                    <button onClick={this.toggleDisplay}>Select Image</button>
                </TogglerBox>
            ) : (
                <FormBox>
                    <form>
                        <input type='text' placeholder='Enter an image URL' onChange={inputChange} />
                        <button onClick={this.handleUrlSubmit}>Detect</button>
                    </form>
                    <form>
                        <input
                            // ref={(ref) => { this.uploadInput = ref; }}
                            ref='uploadInput'
                            type='file'
                            accept='image/*'
                            onChange={this.handleUploadImage}
                        />
                        {/* <button onClick={this.handleUploadImage}>Detect</button> */}
                    </form>
                </FormBox>
            ))
        );
    }
}

export default ImageLinkForm;