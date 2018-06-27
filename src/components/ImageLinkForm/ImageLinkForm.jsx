import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90vw;
`;

const Form = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 3rem;
    width: 100%;
`;

const Input = styled.input`
    background-color: transparent;
    border: 1px solid #0a0a0a;
    border-bottom-left-radius: .4rem;
    border-right: 0;
    box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
    color: #0a0a0a;
    display: flex;
    font-size: 1rem;
    height: 100%;
    max-width: 100%;
    padding: .5rem;
    width: 100%;
`;

const Button = styled.button`
    background-color: transparent;
    border: 1px solid #0a0a0a;
    border-bottom-right-radius: .4rem;
    color: #0a0a0a;
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;
    height: 100%;
    padding: 0 1.5rem;

    &:hover {
        background-color: #0a0a0a;
        color: white;
    }
`;

const ImageLinkForm = ({ inputChange, submit }) => {
    return (
        <Column>
            <Form>
                <Input type='text' onChange={inputChange} />
                <Button onClick={submit}>Detect</Button>
            </Form>
        </Column>
    );
}

export default ImageLinkForm;