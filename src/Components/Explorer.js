import React, {useState} from 'react';
import DrinkCard from './DrinkCard';
import drinksData from '../Data/drinks.json';
import styled from 'styled-components';

const StyledDrinkContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const StyledInput = styled.input`
    display: block;
    margin: 0 auto;
    width: 20%;
    border-radius: 5px;
    border: 0.5px solid grey;
    padding: 0.5em;

`;

const StyledButton = styled.button`
    display: block;
    margin: 0 auto;
    padding: 0.5em;
    width: 15%;
    margin-top: 1em;
    border-radius: 5px;
    border: none;
    background-color: #7B435B;
    color: white;

`;


const Explorer = () =>{
    const [drinks, setDrinks] = useState([]);
    const [notFound, setNotFound] = useState(false);


    const search = (e) => {
        e.preventDefault();
        const search = document.getElementById('searchInput').value;
        document.getElementById('searchInput').value = '';
        
        const result = drinksData.cocktails.filter(item => {
            const drinkName = item.name.toLowerCase();
            return drinkName.includes(search.toLowerCase());
        });

        if(result.length === 0){
            setNotFound(true);
        }
        else{
            setNotFound(false);
        }

        setDrinks(result);
    }

    const generateDrinkResult = () =>{
        if(drinks.length > 0)
            return drinks.map(item => <DrinkCard key={item.name} name={item.name} src={item.image}></DrinkCard>);
    }

    
    return (
        <div>
            <h1>Explorer</h1>
                <h2>Find your favourite!</h2>
                <StyledInput type="text" id="searchInput"/>
                <StyledButton onClick={search}>Search</StyledButton>
            <StyledDrinkContainer>
                {generateDrinkResult()}
            </StyledDrinkContainer>
            {notFound && <p>Not found</p>}
        </div>
        

    )
    
}

export default Explorer;