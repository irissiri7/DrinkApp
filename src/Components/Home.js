import React from 'react';
import styled from 'styled-components';
import img from '../Images/bkg.jpg'

const StyledImgContainer = styled.div`
    width: 700px;
    height: auto;
    margin: 0 auto;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const StyledQuote = styled.blockquote`
    margin: 3%;
    margin-bottom: 1%;
`;


const Home = () => {
    return (
    <div>
        <h1>Welcome to the Cocktail Explorer!</h1>
        <StyledImgContainer>
            <StyledImg src={require('../Images/bkg2.jpg')}/>
        </StyledImgContainer>
        <StyledQuote cite="https://drinkade.com/blogs/news/35-famous-drinking-quotes">
            ”I feel bad for people who don’t drink. When they wake up in the morning, 
            that’s as good as they’re going to feel all day.”
        </StyledQuote>
        <p>- Frank Sinatra</p>
    </div>
    )
}

export default Home;