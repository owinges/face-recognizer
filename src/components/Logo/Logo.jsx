import React from 'react';
import Tilt from 'react-tilt';
import styled from 'styled-components';

import brain from './brain.png';

const LogoTilt = styled(Tilt)`
    background: linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%);
    border-radius: .25rem;
    box-shadow: 0px 0px 8px 2px rgba( 0, 0, 0, 0.2 );
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TiltInner = styled.div`
    padding: 3px;
    padding-top: 9px;
`;

const Logo = () => {
    return (
        <LogoTilt options={{ max: 50 }} style={{ height: 40, width: 40 }}>
            <TiltInner>
                <img src={brain} alt='Brain logo'/>
            </TiltInner>
        </LogoTilt>
    );
}

export default Logo;