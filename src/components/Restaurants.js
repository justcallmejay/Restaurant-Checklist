import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import FilterRestaurant from "./FilterRestaurant";
import SortRestaurant from "./SortRestaurant";

function Restaurants( { restaurant, setRestaurant, myVisits, setMyVisits } ) {

const renderMyVisits = (place) => {
        if (!myVisits.includes(place)) {
            const renderRestaurant = [...myVisits, place]
            setMyVisits(renderRestaurant)
        }
        fetch('http://localhost:4000/user', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(place)
        })
    }    
    
    const [filterRestaurant, setFilterRestaurant] = useState("All")
    const [filterPrice, setFilterPrice] = useState("All")
    
    function filterPlace(e) {
        return setFilterRestaurant(e.target.value)
    }
    
    const displayRestaurants = restaurant.filter(place => {
        if (filterRestaurant === "All") return true;
        
        return place.description === filterRestaurant
    })
    
    function filterPlacePrice(e) {
        setFilterPrice(e.target.value)
    }
    
    const displayPrice = displayRestaurants.filter(price => {
        if (filterPrice === "All") return true;
        
        return price.price === filterPrice
    })

    return (
    <>
    <div className="restaurant-pagetitle">
        <h1>Explore</h1>
        <p>Visited a restaurant?  Click one of the places to add it into you list of visited restaurants!</p>
    <FilterRestaurant filterPlace={filterPlace} filterPlacePrice={filterPlacePrice}/>
    <SortRestaurant restaurant={restaurant} setRestaurant={setRestaurant}/>
    </div>
        
        <div className="restaurant-container">
            {displayPrice.map(food => 
            <RestaurantCard food={food} renderMyVisits={renderMyVisits} />)}
        </div>
    </>
    )
}

export default Restaurants;