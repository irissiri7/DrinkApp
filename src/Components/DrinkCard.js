import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    display: block;
    color: rgb(96, 145, 128);
    text-decoration-line: none;
    padding: 2%;

    &:hover{
        background-color: rgb(96, 145, 128);
        color: white;
    }
`;

const StyledContainer = styled.div`
    margin: 2%;
`;

const DrinkCard = ({name, src}) => {
    return (
        <StyledContainer>
            <StyledLink to={`/drinkpage/${name.toLowerCase()}`}>{name}</StyledLink>
            <img src={src} alt="Drink"/>
        </StyledContainer>
    )
}

export default DrinkCard;