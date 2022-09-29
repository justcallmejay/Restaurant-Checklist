import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SortRestaurant from "./SortRestaurant";

function Restaurants( { restaurant, myVisits, setMyVisits } ) {

const renderMyVisits = (place) => {
        if (!myVisits.includes(place)) {
            const renderRestaurant = [...myVisits, place]
            setMyVisits(renderRestaurant)
        }
    }    
    
    const [filterRestaurant, setFilterRestaurant] = useState("All")
    const [filterPrice, setFilterPrice] = useState("All")

    function filterPlace(e) {
        return setFilterRestaurant(e.target.value)
    }

    function filterPlacePrice(e) {
        setFilterPrice(e.target.value)
    }
    
    const displayRestaurants = restaurant.filter(place => {
        if (filterRestaurant === "All") return true;

        return place.description === filterRestaurant
    })

    const displayPrice = displayRestaurants.filter(price => {
        if (filterPrice === "All") return true;

        return price.price === filterPrice
    })

    return (
    <>
    <SortRestaurant filterPlace={filterPlace} filterPlacePrice={filterPlacePrice}/>
    <div className="restaurant-pagetitle">
        <h1>Explore</h1>
        <p>Visited a restaurant?  Click one of the places to add it into you list of visited restaurants!</p>
    </div>
        
        <div className="restaurant-container">
            {displayPrice.map(food => 
            <RestaurantCard food={food} renderMyVisits={renderMyVisits} />)}
        </div>
    </>
    )
}

export default Restaurants;