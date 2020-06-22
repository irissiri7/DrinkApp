import React from 'react';
import {StyledLink, StyledContainer} from '../Styles/DrinkCardStyles';




const DrinkCard = ({name, src}) => {
    return (
        <StyledContainer>
            <StyledLink to={`/drinkpage/${name.toLowerCase()}`}>{name}</StyledLink>
            <img src={src} alt="Drink"/>
        </StyledContainer>
    )
}

export default DrinkCard;