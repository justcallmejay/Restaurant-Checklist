import React from "react";
import RestaurantCard from "./RestaurantCard";
import SortRestaurant from "./SortRestaurant";

function Restaurants( { restaurant, myVisits, setMyVisits } ) {

const renderMyVisits = (place) => {
        if (!myVisits.includes(place)) {
            const renderRestaurant = [...myVisits, place]
            setMyVisits(renderRestaurant)
        }
    }    
    
    return (
    <>
    <SortRestaurant />
    <h1>Explore</h1>
    <p>Visited a restaurant?  Click one of the places to add it into you list of visited restaurants!</p>
    <div className="restaurant-container">
        {restaurant.map(food => 
        <RestaurantCard food={food} renderMyVisits={renderMyVisits} />)}
    </div>
    </>
    )
}

export default Restaurants;