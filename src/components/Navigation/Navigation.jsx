import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

const Navbar = styled.nav`
    display: flex;
    height: 56px;
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
    padding: .5rem .75rem;
`;

const NavLink = styled(Link)`
    align-items: center;
    color: #0a0a0a;
    height: 100%;
    display: flex;
    line-height: 1.5;
    padding: 0 .75rem;
    position: relative;

    &:hover {
        background-color: #fafafa;
    }
`;

const Navigation = ({ isLoggedIn }) => {
    return (
        <Navbar>
            <NavbarStart>
                <NavBrand>
                    <Logo />
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