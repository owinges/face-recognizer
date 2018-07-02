import React, { Component } from 'react';
import styled from 'styled-components';

const Column = styled.div`
    display: flex;
    justify-content: space-between;
    width: 900px;
`;

const Form = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 3rem;
    /* width: 100%; */
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
    max-width: 100%;
    padding: 2rem;
    /* width: 100%; */
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

    &:hover {
        background-color: ${props => props.theme.tertiary};
        color: white;
    }
`;

const Toggler = styled.button`
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

    &:hover {
        background-color: ${props => props.theme.tertiary};
        color: white;
    }
`;

class ImageLinkForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 'URL'
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
        
        reader.readAsDataURL(file);
    }

    toggleMode = () => {
        if (this.state.mode === 'URL') {
            this.setState({ mode: 'FILE' });
        } else {
            this.setState({ mode: 'URL' });
        }
    }

    render () {
        const { inputChange, urlSubmit } = this.props;
        const { mode } = this.state;
        
        return (
            <Column>
                <Form>
                    <Input type='text' onChange={inputChange} />
                    <Button onClick={urlSubmit}>Detect</Button>
                </Form>
                <form onSubmit={this.handleUploadImage}>
                    <input ref={(ref) => { this.uploadInput = ref; }} type='file' accept='image/*' />
                    <input type="submit" />
                </form>
            </Column>
        );
    }
}

export default ImageLinkForm;