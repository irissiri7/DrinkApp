import React, { useEffect, useState } from 'react';
import drinks from '../Data/drinks.json';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';

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
            console.log(e);
            setError(true);
        }
    }, [])

    const displayInformation = () => {
        return(
            <>
                <h1>{name}</h1>
                <p><strong>Mix it like so:</strong></p>
                <p>{prep}</p>
                <img src={img} alt='Drink'/>
            </>
        )
    }


    
    return(
        <div>
            {error ? <PageNotFound/> : displayInformation()}
        </div>
    )
}

export default DrinkPage;