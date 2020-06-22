import React from 'react';

const DrinkCard = ({name, src}) =>{
    return (
        <div>
            <p>{name}</p>
            <img src={src}/>
        </div>
    )
}

export default DrinkCard;