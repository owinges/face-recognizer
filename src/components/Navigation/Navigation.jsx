import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import brain from './brain.png';

const Navbar = styled.nav`
    background-color: ${props => props.theme.primary};
    display: flex;
    height: 6rem;
    justify-content: space-between;
    @media only screen and (max-width: 500px) {
        background-color: transparent;
    }
`;

const NavbarStart = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const NavbarEnd = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const NavBrand = styled.div`
    height: 100%;
    padding: .5rem 1rem;

    img {
        height: 100%;
    }

    @media only screen and (max-width: 500px) {
        display: none;
    }
`;

const NavLink = styled(Link)`
    align-items: center;
    color: #172A3A;
    display: flex;
    font-size: 2rem;
    height: 100%;
    line-height: 1.5;
    padding: 0 2rem;
    position: relative;

    &:hover {
        background-color: ${props => props.theme.secondary};
    }

    @media only screen and (max-width: 500px) {
        display: none;
    }
`;

const NavMobile = styled.div`
    cursor: pointer;
    display: none;
    height: 100%;
    padding: .5rem 1rem;

    img {
        height: 100%;
    }

    @media only screen and (max-width: 500px) {
        display: block;
    }
`;

const Navigation = ({ isLoggedIn }) => {
    return (
        <Navbar>
            <NavbarStart>
                <NavBrand>
                    <img src={brain} alt='Brain logo' />
                </NavBrand>
            </NavbarStart>
            <NavbarEnd>
                <NavMobile>
                    <img src={brain} alt='Brain logo' />
                </NavMobile>
                {isLoggedIn ? (
                    <NavLink to='/login'>Log Out</NavLink>
                ) : (
                        <React.Fragment>
                            <NavLink to='/login'>Log In</NavLink>
                            <NavLink to='/register'>Register</NavLink>
                        </React.Fragment>
                    )}
            </NavbarEnd>
        </Navbar>
    );
}

export default Navigation;