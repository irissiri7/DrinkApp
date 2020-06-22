import React from 'react';
import {StyledHeader, StyledNavLink} from '../Styles/NavigationStyles';


const Navigation = () =>{
    return(
        <StyledHeader>
            <div>
                <StyledNavLink to='/'>Home</StyledNavLink>
                <StyledNavLink to='/explorer'>Explorer</StyledNavLink>
            </div>
        </StyledHeader>
    )
}

export default Navigation;