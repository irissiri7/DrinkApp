import React, {useState} from 'react';
import DrinkCard from '../DrinkCard';
import drinksData from '../../Data/drinks.json';
import {StyledDrinkContainer, StyledInput, StyledButton} from '../../Styles/ExploreStyles';


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
            <h1>Find your favourite!</h1>
            <StyledInput type="text" id="searchInput"/>
            <StyledButton onClick={search}>Search</StyledButton>
            <StyledDrinkContainer>
                {generateDrinkResult()}
            </StyledDrinkContainer>
            {notFound && <p>No such drink found!</p>}
        </div>
        

    )
    
}

export default Explorer;