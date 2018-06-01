import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
    display: flex;
    height: 600px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 1rem;
    width: 500px;
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
    border-top-left-radius: .4rem;
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
    border-top-right-radius: .4rem;
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

const ResultsBox = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: .4rem;
    border-bottom-right-radius: .4rem;
    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    display: flex;
    height: 552px;
    width: 100%;
`;

const ImageLinkForm = ({ inputChange, submit }) => {
    return (
        <Column>
            <Form>
                <Input type='text' onChange={inputChange} />
                <Button onClick={submit}>Detect</Button>
            </Form>
            <ResultsBox>
                <p>Enter an image URL above and I will detect faces in the picture!</p>
            </ResultsBox>
        </Column>
    );
}

export default ImageLinkForm;