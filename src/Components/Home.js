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


const Home = () => {
    return (
    <div>
        <h1>Home</h1>
        <h2>Welcome to the wonderful world of drinks!</h2>
        <StyledImgContainer>
            <StyledImg src={require('../Images/bkg.jpg')}/>
        </StyledImgContainer>
    </div>
    )
}

export default Home;