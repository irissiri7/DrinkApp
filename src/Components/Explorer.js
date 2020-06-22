import React, {useState, useEffect} from 'react';
import DrinkCard from './DrinkCard';
import drinksData from '../Data/drinks.json';
import styled from 'styled-components';

const StyledDrinkContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;

const Explorer = () =>{
    const [drinks, setDrinks] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);


    const search = (e) => {
        e.preventDefault();
        const search = document.getElementById('searchInput').value;
        document.getElementById('searchInput').value = '';
        
        setDrinks(drinksData.cocktails.filter(item => item.name.includes(search)));
    }

    const generateDrinkResult = () =>{
        if(drinks.length > 0)
            return drinks.map(item => <DrinkCard key={item.name} name={item.name} src={item.image}></DrinkCard>);
    }

    
    return (
        <div>
            <h1>Explorer</h1>
            <input type="text" id="searchInput"/>
            <button onClick={search}>Search</button>
            <StyledDrinkContainer>
                {generateDrinkResult()}
            </StyledDrinkContainer>
            {hasSearched && <p>No result</p>}
        </div>
        

    )
    
}

export default Explorer;