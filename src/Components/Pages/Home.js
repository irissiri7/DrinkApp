import React from 'react';
import {StyledImgContainer, StyledImg, StyledQuote} from '../../Styles/HomeStyles';


const Home = () => {
    return (
    <div>
        <h1>Welcome to the Cocktail Explorer!</h1>
        <StyledImgContainer>
            <StyledImg src={require('../../Images/bkg.jpg')}/>
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