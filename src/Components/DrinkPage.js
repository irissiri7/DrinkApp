import React, { useEffect, useState } from 'react';
import drinks from '../Data/drinks.json';
import { useParams, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    display: block;
    color: rgb(96, 145, 128);
    text-decoration-line: none;
    padding: 2%;
    margin: 0;

    &:hover{
        background-color: rgb(96, 145, 128);
        color: white;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

const DrinkPage = () => {
    const search = useParams();
    const [name, setName] = useState();
    const [img, setImg] = useState();
    const [prep, setPrep] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
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
            <>
                <h1>{name}</h1>
                <p><strong>Mix it like so:</strong></p>
                <p>{prep}</p>
                <Container >
                    <div>
                        <img src={img} alt='Drink'/>
                        <StyledLink to='/explorer'>Go back</StyledLink>
                    </div>
                </Container>
            </>
        )
    }


    
    return(
        <div>
            {error ? <PageNotFound/> : displayInformation()}
            {error && <StyledLink to='/explorer'>Go back</StyledLink>}
            
        </div>
    )
}

export default DrinkPage;