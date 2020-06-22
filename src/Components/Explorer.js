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
            <input type="text" id="searchInput"/>
            <button onClick={search}>Search</button>
            <StyledDrinkContainer>
                {generateDrinkResult()}
            </StyledDrinkContainer>
            {notFound && <p>Not found</p>}
        </div>
        

    )
    
}

export default Explorer;