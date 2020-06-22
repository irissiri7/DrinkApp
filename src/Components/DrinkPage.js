import React, { useEffect, useState } from 'react';
import drinks from '../Data/drinks.json';
import { useParams, Link } from 'react-router-dom';
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
            <Link to='/explorer'>Go back</Link>
        </div>
    )
}

export default DrinkPage;