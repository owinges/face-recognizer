import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/logo.png';

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
    z-index: 3000;

    img {
        height: 100%;
    }

    @media only screen and (max-width: 500px) {
        display: block;
    }
`;

const Logo = styled.div`
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    height: 64px;
    width: 64px;
`;

const menuAppear = keyframes`
    from {
        border-radius: 100rem;
        right: -100vw;
        top: -100vh
    }

    to {
        border-radius: 0;
        right: 0;
        top: 0;
    }
`;

const MobileMenu = styled.div`
    align-items: center;
    justify-content: center;
    animation: ${menuAppear} .4s ease;
    background-color: ${props => props.theme.primary};
    display: ${props => (props.showMenu === true ? 'flex' : 'none')};
    flex-direction: column;
    height: 100vh;
    position: absolute;
    width: 100vw;
    z-index: 2000;

    @media only screen and (min-width: 500px) {
        display: none;
    }
`;

const MobileNavLink = styled(Link)`
    color: #172A3A;
    font-size: 4rem;
    line-height: 1.5;
    padding: 3rem 0;

    &:hover {
        background-color: ${props => props.theme.secondary};
    }
`;

class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayMenu: false
        };
    }

    menuToggle = () => {
        this.setState({ displayMenu: !this.state.displayMenu });
    }

    render () {
        const { displayMenu } = this.state;

        return (
            <Navbar>
                <NavbarStart>
                    <NavBrand>
                        {/* <img height='64px' src={logo} alt='Owinges logo' /> */}
                        <Logo></Logo>
                    </NavBrand>
                </NavbarStart>
                <NavbarEnd>
                    <NavMobile>
                        {/* <img height='64px' src={logo} alt='Owinges logo' /> */}
                        <Logo onClick={this.menuToggle}></Logo>
                    </NavMobile>
                    {this.props.isLoggedIn ? (
                        <NavLink to='/login'>Log Out</NavLink>
                    ) : (
                            <React.Fragment>
                                <NavLink to='/login'>Log In</NavLink>
                                <NavLink to='/register'>Register</NavLink>
                            </React.Fragment>
                        )}
                </NavbarEnd>
                <MobileMenu showMenu={displayMenu}>
                    {this.props.isLoggedIn ? (
                        <MobileNavLink to='/login' onClick={this.menuToggle}>Log Out</MobileNavLink>
                    ) : (
                        <React.Fragment>
                            <MobileNavLink to='/login' onClick={this.menuToggle}>Log In</MobileNavLink>
                            <MobileNavLink to='/register' onClick={this.menuToggle}>Register</MobileNavLink>
                        </React.Fragment>
                    )}
                </MobileMenu>
            </Navbar>
        );
    }
}

export default Navigation;