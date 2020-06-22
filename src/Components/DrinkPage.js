import React, { useEffect, useState } from 'react';
import drinks from '../Data/drinks.json';
import { useParams, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: rgb(96, 145, 128);
    text-decoration-line: none;
    padding: 0px 20px;

    &:hover{
        background-color: rgb(96, 145, 128);
        color: white;
    }
`;

const DrinkPage = () => {
    const search = useParams();
    const [name, setName] = useState();
    const [img, setImg] = useState();
    const [prep, setPrep] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log(search)
        try{
            const drink = drinks.cocktails.find(item => item.name.toLowerCase() === search.name);
            setName(drink.name);
            setImg(drink.image);
            setPrep(drink.preparation);
        }
        catch(e){
            setError(true);
        }
    }, [])

    const displayInformation = () => {
        return(
            <div>
                <h1>{name}</h1>
                <p><strong>Mix it like so:</strong></p>
                <p>{prep}</p>
                <img src={img} alt='Drink'/>
            </div>
        )
    }


    
    return(
        <div>
            {error ? <PageNotFound/> : displayInformation()}
            <StyledLink to='/explorer'>Go back</StyledLink>
        </div>
    )
}

export default DrinkPage;