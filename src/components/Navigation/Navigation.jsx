import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import brain from './brain.png';

const Navbar = styled.nav`
    background-color: ${props => props.theme.primary};
    display: flex;
    height: 6rem;
    justify-content: space-between;
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
    padding: .5rem 1rem;
    height: 100%;
    img {
        height: 100%;
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