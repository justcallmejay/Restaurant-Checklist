import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

function Restaurants( { restaurant, myVisits, setMyVisits } ) {

const renderMyVisits = (place) => {
        if (!myVisits.includes(place)) {
            const renderRestaurant = [...myVisits, place]
            setMyVisits(renderRestaurant)
            // setHighlightCard((highlightCard) => !highlightCard)
            // fetch('http://localhost:4000/user', {
            //     method: "POST",
            //     headers: {
            //         "Content-Type" : "application/json"
            //     },
            //     body: JSON.stringify(myVisits)
            // })
            // .then(res => res.json())
            // .then(() => setMyVisits(renderRestaurant))
        }
    }

    const [highlightCard, setHighlightCard] = useState(false)
    const greenMode = highlightCard ? "green" : "white"

    // function onHighlightCard() {
    //     setHighlightCard((highlightCard) => !highlightCard)
    // }

        // function onHighlightCard() {
    //     setHighlightCard((highlightCard) => highlightCard = true)
    // }
    
    
return (
    <>
    <h1>Explore</h1>
    <p>Visited a restaurant?  Click one of the places to add it into you list of visited restaurants!</p>
    {/* {restaurant.map(food =>  */}
        {/* <div className="explore" key={food.id} style={{ background : greenMode }} onClick={() => renderMyVisits(food)}>
            <img src={food.image} alt={food.name}/>
            <h2>{food.name}</h2>
            <h3>{food.description}</h3>
            <h3>Rating avg: {food.rating} / 5 of {food.ratingcount} Customers</h3>
            <h3>Price: {food.price}</h3>
        </div> */}
        {/* )} */}
        {restaurant.map(food => 
        <RestaurantCard food={food} renderMyVisits={renderMyVisits} />)}
        </>
    )
}

export default Restaurants;