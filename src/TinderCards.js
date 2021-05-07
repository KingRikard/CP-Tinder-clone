import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
const [people, setPeople] = useState([
    {
        name:   "Maria",
        url:    "https://static.wixstatic.com/media/72f079_8a7f6adbced54053aacaf3f12b8da74b~mv2.jpg/v1/fill/w_481,h_483,al_c,q_80,usm_0.66_1.00_0.01/AC082030-1C03-42C7-AEB3-6F9761378717_JPG.jpg",
    },
    {
        name:   "Donald",
        url:    "https://d.newsweek.com/en/full/1061787/donald-trump-approval-rating.jpg",

    }
]);


    return (
        <div>
            <h1>Tinder Cards</h1>

            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                <TinderCard 
                    className="swipe" 
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    >
                    
                    <div style={{ backgroundImage: 'url(${person.url})'}} className="card" >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
                
                ))}
            </div>

            
        </div>
    )
}

export default TinderCards
