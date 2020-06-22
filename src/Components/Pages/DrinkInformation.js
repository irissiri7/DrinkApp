import React, { useEffect, useState } from 'react';
import drinks from '../../Data/drinks.json';
import { useParams } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import {StyledLink, Container, StyledLink404Page} from '../../Styles/DrinkInformationStyles';




const DrinkInformation = () => {
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
            {error && <StyledLink404Page to='/explorer'>Go back</StyledLink404Page>}
            
        </div>
    )
}

export default DrinkInformation;