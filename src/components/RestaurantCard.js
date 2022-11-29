import React, { useState } from "react";

function RestaurantCard({ renderMyVisits, food }) {


    const [highlightCard, setHighlightCard] = useState(false)
    const greenMode = highlightCard ? "green" : "white"
    const confirmMessage = highlightCard ? "block" : "none"

    function renderVisits() {
        setHighlightCard(highlightCard => highlightCard = true)
    }

    return (
        <>
    <div className="explore" 
            key={food.id} 
            style={{ borderColor : greenMode , borderWidth : "5px" }} 
            onClick={() => {renderMyVisits(food);renderVisits()}}
        >
        <img src={food.image} alt={food.name}/>
        <h2>{food.name}</h2>
        <h3>Distance: {food.location} mi.</h3>
        <h3>Type: {food.description}</h3>
        <h3>Rating avg:</h3> 
        <h4>&nbsp;&nbsp;&nbsp;{food.rating.toFixed(2)} / 5  from  {food.ratingcount} Customers</h4>
        <h3>Price: {food.price}</h3>
        <div id="message">
        <h3 style={{ display : confirmMessage }}>Added!</h3>
        </div>
    </div>
    </>
    )
}

export default RestaurantCard;