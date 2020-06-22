import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: green;
    min-height: 100px;
    text-align: center;
`;

const StyledNavLink = styled(NavLink)`
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: xx-large;
    padding: 2em;
`;


const Navigation = () =>{
    return(
        <StyledHeader>
            <StyledNavLink to='/'>Home</StyledNavLink>
            <StyledNavLink to='/explorer'>Explorer</StyledNavLink>
        </StyledHeader>
    )
}

export default Navigation;