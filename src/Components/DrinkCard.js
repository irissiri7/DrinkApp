import React from 'react';
import {Link} from 'react-router-dom';

const DrinkCard = ({name, src}) => {
    return (
        <div>
            <Link to={`/drinkpage/${name.toLowerCase()}`}><p>{name}</p></Link>
            <img src={src} alt="Drink"/>
        </div>
    )
}

export default DrinkCard;