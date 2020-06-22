import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: rgb(96, 145, 128, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
`;

const StyledNavLink = styled(NavLink)`
    color: white;
    font-size: large;
    text-decoration: none;
    padding: 1em;
`;


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